/** Core type definitions matching Supabase schema */

export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1";

export interface ExerciseChunk {
  index: number;
  transcript: string;
  start_ms: number;
  end_ms: number;
}

export interface ExerciseCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface Exercise {
  id: string;
  category_id: string;
  title: string;
  audio_url: string;
  transcript: string;
  cefr_level: CefrLevel;
  difficulty: number;
  duration_seconds: number;
  word_count: number;
  accent: string;
  chunks: ExerciseChunk[];
  is_active: boolean;
  category?: ExerciseCategory;
}

/** Exercise with optional user completion data (for list screen) */
export interface ExerciseWithStatus extends Exercise {
  best_accuracy: number | null;
}

export interface DiffWord {
  word: string;
  expected: string;
  status: "correct" | "wrong" | "missing" | "extra";
}

export interface ChunkResult {
  index: number;
  user_answer: string;
  diff: DiffWord[];
  accuracy: number;
}

export interface SessionDiffResult {
  chunks: ChunkResult[];
  overall_accuracy: number;
}

export interface DictationSession {
  id: string;
  user_id: string;
  exercise_id: string;
  user_answer: string;
  accuracy_score: number;
  correct_words: number;
  total_words: number;
  diff_result: SessionDiffResult;
  replay_count: number;
  speed_used: number;
  completed_at: string | null;
}

export interface Profile {
  id: string;
  display_name: string;
  cefr_level: CefrLevel;
  total_exercises_completed: number;
}
