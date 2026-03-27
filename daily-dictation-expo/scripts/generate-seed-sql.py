#!/usr/bin/env python3
"""
Convert data-simulator JSON → Supabase seed.sql
Reads: exercises.json + categories.json from data-simulator
Outputs: supabase/seed.sql with 8 categories + 200 exercises
Audio URL pattern: https://<project>.supabase.co/storage/v1/object/public/audio/{level}/{cat}/{id}.mp3

Usage: python scripts/generate-seed-sql.py
"""
import json
import os
import re

DATA_DIR = "/home/duymd/src/dailydictation/tdd-src/src-v1/data-simulator/data"
# Replace with your actual Supabase project URL
SUPABASE_URL = os.environ.get("SUPABASE_URL", "https://YOUR_PROJECT.supabase.co")
OUTPUT_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), "supabase", "seed.sql")


def escape_sql(text: str) -> str:
    """Escape single quotes for SQL"""
    return text.replace("'", "''") if text else ""


def generate_audio_url(exercise_id: str, cefr_level: str, category_slug: str) -> str:
    """Build Supabase Storage public URL for audio file"""
    return f"{SUPABASE_URL}/storage/v1/object/public/audio/{cefr_level}/{category_slug}/{exercise_id}.mp3"


def simple_sentence_chunks(transcript: str) -> list[dict]:
    """Split transcript into sentence-level chunks with estimated timestamps.
    This is a fallback — Whisper script generates accurate timestamps.
    Estimates: ~150ms per word average speaking rate.
    """
    sentences = re.split(r'(?<=[.?!])\s+', transcript.strip())
    sentences = [s for s in sentences if s]

    chunks = []
    current_ms = 0
    for i, sentence in enumerate(sentences):
        word_count = len(sentence.split())
        duration_ms = max(word_count * 400, 1500)  # ~400ms/word, min 1.5s
        chunks.append({
            "index": i,
            "transcript": sentence,
            "start_ms": current_ms,
            "end_ms": current_ms + duration_ms,
        })
        current_ms += duration_ms

    return chunks


def main():
    with open(os.path.join(DATA_DIR, "categories.json")) as f:
        categories = json.load(f)

    with open(os.path.join(DATA_DIR, "exercises.json")) as f:
        exercises = json.load(f)

    lines = [
        "-- Auto-generated seed data from data-simulator",
        f"-- {len(categories)} categories, {len(exercises)} exercises",
        "",
        "-- Categories",
    ]

    # Build category slug map for audio URL generation
    cat_slug_map = {}
    for i, cat in enumerate(categories):
        cat_slug_map[cat["id"]] = cat["slug"]
        lines.append(
            f"INSERT INTO public.exercise_categories (id, name, slug, description, display_order) "
            f"VALUES (gen_random_uuid(), '{escape_sql(cat['name'])}', "
            f"'{escape_sql(cat['slug'])}', '{escape_sql(cat.get('description', ''))}', {i + 1});"
        )

    lines.append("")
    lines.append("-- Exercises (with chunks JSONB)")

    # We need category UUIDs — use a subquery approach
    lines.append("-- Note: category_id resolved via slug subquery")
    lines.append("")

    for ex in exercises:
        cat_slug = cat_slug_map.get(ex["category_id"], "news")
        cefr = ex["cefr_level"]
        transcript = ex.get("transcript_text", "")
        audio_url = generate_audio_url(ex["id"], cefr, cat_slug)
        word_count = len(transcript.split()) if transcript else 0
        duration = ex.get("audio_duration_seconds", 10)
        difficulty = ex.get("difficulty_rating", 1)

        # Generate estimated chunks (Whisper script would replace these with accurate timestamps)
        chunks = simple_sentence_chunks(transcript)
        chunks_json = json.dumps(chunks, ensure_ascii=False)

        lines.append(
            f"INSERT INTO public.exercises "
            f"(category_id, title, audio_url, transcript, cefr_level, difficulty, "
            f"duration_seconds, word_count, chunks) "
            f"VALUES ("
            f"(SELECT id FROM public.exercise_categories WHERE slug = '{escape_sql(cat_slug)}'), "
            f"'{escape_sql(ex['title'])}', "
            f"'{escape_sql(audio_url)}', "
            f"'{escape_sql(transcript)}', "
            f"'{cefr}', {difficulty}, {duration}, {word_count}, "
            f"'{escape_sql(chunks_json)}'::jsonb);"
        )

    sql_content = "\n".join(lines) + "\n"

    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, "w") as f:
        f.write(sql_content)

    print(f"Generated {OUTPUT_PATH}")
    print(f"  Categories: {len(categories)}")
    print(f"  Exercises: {len(exercises)}")


if __name__ == "__main__":
    main()
