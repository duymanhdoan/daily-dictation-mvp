import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import type { ExerciseWithStatus } from "../lib/types";
import { CefrLevelBadge } from "./cefr-level-badge";

interface ExerciseCardProps {
  exercise: ExerciseWithStatus;
}

/** Exercise list card — shows title, level, difficulty, duration, completion */
export function ExerciseCard({ exercise }: ExerciseCardProps) {
  const router = useRouter();

  const chunkCount = exercise.chunks?.length ?? 0;
  const durationStr = exercise.duration_seconds
    ? `${Math.floor(exercise.duration_seconds / 60)}:${String(exercise.duration_seconds % 60).padStart(2, "0")}`
    : "--";

  // Difficulty dots: filled ● vs empty ○
  const difficultyDots = Array.from({ length: 5 }, (_, i) =>
    i < (exercise.difficulty ?? 1) ? "●" : "○"
  ).join("");

  const hasCompleted = exercise.best_accuracy !== null;

  return (
    <TouchableOpacity
      className="bg-white rounded-xl p-4 mb-3 border border-slate-100"
      style={{ shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 }}
      activeOpacity={0.7}
      onPress={() => router.push(`/exercises/${exercise.id}`)}
    >
      {/* Title */}
      <Text className="text-base font-semibold text-slate-900 mb-2" numberOfLines={2}>
        🎧 {exercise.title}
      </Text>

      {/* Metadata row */}
      <View className="flex-row items-center gap-3">
        <CefrLevelBadge level={exercise.cefr_level} />
        <Text className="text-xs text-slate-400">{difficultyDots}</Text>
        <Text className="text-xs text-slate-500">{durationStr}</Text>
        {chunkCount > 0 && (
          <Text className="text-xs text-slate-500">{chunkCount} chunks</Text>
        )}
      </View>

      {/* Completion indicator */}
      {hasCompleted && (
        <View className="mt-2 flex-row items-center">
          <Text className="text-xs text-green-600 font-medium">
            ✓ Completed {Math.round(exercise.best_accuracy!)}%
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
