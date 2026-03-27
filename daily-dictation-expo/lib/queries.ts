/** Supabase query helpers — typed wrappers for common operations */

import { supabase } from "./supabase";
import type {
  CefrLevel,
  Exercise,
  ExerciseWithStatus,
  DictationSession,
  Profile,
} from "./types";

/** Fetch exercises with user's best session accuracy (two-query to avoid inner join hiding) */
export async function getExercisesWithStatus(
  cefrLevel: CefrLevel,
  userId: string
): Promise<ExerciseWithStatus[]> {
  // Query 1: all exercises for this CEFR level
  const { data: exercises, error: exErr } = await supabase
    .from("exercises")
    .select("*, category:exercise_categories(name, slug)")
    .eq("cefr_level", cefrLevel)
    .eq("is_active", true)
    .order("created_at", { ascending: true });

  if (exErr) throw exErr;

  // Query 2: user's best session per exercise
  const { data: sessions } = await supabase
    .from("sessions")
    .select("exercise_id, accuracy_score")
    .eq("user_id", userId)
    .order("accuracy_score", { ascending: false });

  // Merge: keep best accuracy per exercise
  const sessionMap = new Map<string, number>();
  for (const s of sessions ?? []) {
    const existing = sessionMap.get(s.exercise_id);
    if (existing === undefined || s.accuracy_score > existing) {
      sessionMap.set(s.exercise_id, s.accuracy_score);
    }
  }

  return (exercises ?? []).map((ex) => ({
    ...ex,
    best_accuracy: sessionMap.get(ex.id) ?? null,
  }));
}

/** Fetch single exercise by ID */
export async function getExerciseById(id: string): Promise<Exercise | null> {
  const { data, error } = await supabase
    .from("exercises")
    .select("*, category:exercise_categories(name, slug)")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}

/** Fetch next exercise at same CEFR level (cursor-based, wraps around) */
export async function getNextExercise(
  currentId: string,
  cefrLevel: CefrLevel
): Promise<{ id: string } | null> {
  // Get current exercise's created_at for cursor
  const { data: current } = await supabase
    .from("exercises")
    .select("created_at")
    .eq("id", currentId)
    .single();

  if (!current) return null;

  // Next exercise after current
  const { data } = await supabase
    .from("exercises")
    .select("id")
    .eq("cefr_level", cefrLevel)
    .eq("is_active", true)
    .gt("created_at", current.created_at)
    .order("created_at", { ascending: true })
    .limit(1)
    .single();

  if (data) return data;

  // Wrap around to first
  const { data: first } = await supabase
    .from("exercises")
    .select("id")
    .eq("cefr_level", cefrLevel)
    .eq("is_active", true)
    .order("created_at", { ascending: true })
    .limit(1)
    .single();

  return first;
}

/** Save completed dictation session */
export async function createSession(sessionData: {
  user_id: string;
  exercise_id: string;
  user_answer: string;
  accuracy_score: number;
  correct_words: number;
  total_words: number;
  diff_result: object;
  replay_count: number;
  speed_used: number;
}): Promise<DictationSession> {
  const { data, error } = await supabase
    .from("sessions")
    .insert({
      ...sessionData,
      completed_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error || !data) throw error ?? new Error("Failed to create session");

  // Increment profile counter atomically with session creation
  try {
    await supabase.rpc("increment_exercises_completed");
  } catch {
    // Non-critical — don't block session save
  }

  return data as DictationSession;
}

/** Fetch session by ID (for result screen) */
export async function getSessionById(id: string): Promise<DictationSession | null> {
  const { data, error } = await supabase
    .from("sessions")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data as DictationSession;
}

/** Fetch user profile */
export async function getProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw error;
  return data;
}

/** Increment user's total exercises completed (uses auth.uid() server-side) */
export async function incrementExercisesCompleted(): Promise<void> {
  const { error } = await supabase.rpc("increment_exercises_completed");
  if (error) throw error;
}
