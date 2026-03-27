#!/usr/bin/env python3
"""
Generate sentence-level chunk timestamps for exercises using Whisper.
Reads: data-simulator exercises.json + audio/processed/ MP3 files
Outputs: exercises-with-chunks.json (used by generate-seed-sql.py)

Prerequisites: pip install openai-whisper
Usage: python scripts/generate-chunks.py
"""
import whisper
import json
import re
import os

AUDIO_DIR = "/home/duymd/src/dailydictation/tdd-src/src-v1/data-simulator/audio/processed"
EXERCISES_JSON = "/home/duymd/src/dailydictation/tdd-src/src-v1/data-simulator/data/exercises.json"
OUTPUT_PATH = os.path.join(os.path.dirname(__file__), "exercises-with-chunks.json")

model = whisper.load_model("base")  # "base" = fast + good enough for timestamps


def split_transcript_to_sentences(text: str) -> list[str]:
    """Split transcript text into sentences at . ? !"""
    sentences = re.split(r'(?<=[.?!])\s+', text.strip())
    return [s for s in sentences if s]


def get_word_timestamps(audio_path: str) -> list[dict]:
    """Run Whisper with word-level timestamps"""
    result = model.transcribe(audio_path, word_timestamps=True, language="en")
    words = []
    for segment in result["segments"]:
        for w in segment.get("words", []):
            words.append({
                "word": w["word"].strip(),
                "start_ms": int(w["start"] * 1000),
                "end_ms": int(w["end"] * 1000),
            })
    return words


def align_sentences_to_timestamps(sentences: list[str], words: list[dict]) -> list[dict]:
    """Map sentence boundaries to word timestamps"""
    chunks = []
    word_idx = 0

    for i, sentence in enumerate(sentences):
        sentence_words = sentence.split()
        if word_idx >= len(words):
            break

        start_ms = words[word_idx]["start_ms"]
        end_idx = min(word_idx + len(sentence_words) - 1, len(words) - 1)
        end_ms = words[end_idx]["end_ms"]

        chunks.append({
            "index": i,
            "transcript": sentence,
            "start_ms": start_ms,
            "end_ms": end_ms,
        })
        word_idx = end_idx + 1

    return chunks


def audio_path_for_exercise(exercise: dict) -> str:
    """Map exercise ID to audio file path: ex-{cat}-{level}-{num} → {level}/{cat}/ex-{cat}-{level}-{num}.mp3"""
    parts = exercise["id"].split("-")  # ex-news-A1-001
    cat = parts[1]
    level = parts[2]
    return os.path.join(AUDIO_DIR, level, cat, f"{exercise['id']}.mp3")


def main():
    with open(EXERCISES_JSON) as f:
        exercises = json.load(f)

    results = []
    for i, ex in enumerate(exercises):
        audio_path = audio_path_for_exercise(ex)
        if not os.path.exists(audio_path):
            print(f"  SKIP {ex['id']}: audio not found at {audio_path}")
            ex["chunks"] = []
            results.append(ex)
            continue

        print(f"[{i+1}/{len(exercises)}] Processing {ex['id']}...")
        sentences = split_transcript_to_sentences(ex["transcript_text"])
        words = get_word_timestamps(audio_path)
        chunks = align_sentences_to_timestamps(sentences, words)

        # Merge chunks < 2s with previous
        merged = []
        for chunk in chunks:
            duration = chunk["end_ms"] - chunk["start_ms"]
            if duration < 2000 and merged:
                prev = merged[-1]
                prev["transcript"] += " " + chunk["transcript"]
                prev["end_ms"] = chunk["end_ms"]
            else:
                merged.append(chunk)

        # Re-index after merge
        for idx, c in enumerate(merged):
            c["index"] = idx

        ex["chunks"] = merged
        results.append(ex)

    with open(OUTPUT_PATH, "w") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    print(f"\nDone! {len(results)} exercises processed → {OUTPUT_PATH}")
    print(f"Exercises with chunks: {sum(1 for e in results if e['chunks'])}")
    print(f"Exercises without audio: {sum(1 for e in results if not e['chunks'])}")


if __name__ == "__main__":
    main()
