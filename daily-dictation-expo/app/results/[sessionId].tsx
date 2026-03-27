import { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  getSessionById,
  getExerciseById,
  getNextExercise,
} from "../../lib/queries";
import type { DictationSession, Exercise } from "../../lib/types";
import { ScoreCircle } from "../../components/score-circle";
import { ChunkResultCard } from "../../components/chunk-result-card";

export default function ResultScreen() {
  const { sessionId } = useLocalSearchParams<{ sessionId: string }>();
  const router = useRouter();
  const [session, setSession] = useState<DictationSession | null>(null);
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionId) return;
    loadData();
  }, [sessionId]);

  const loadData = async () => {
    try {
      const sess = await getSessionById(sessionId!);
      if (!sess) return;
      setSession(sess);

      const ex = await getExerciseById(sess.exercise_id);
      setExercise(ex);
    } catch (err) {
      console.error("Failed to load result:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    if (!session) return;
    router.replace(`/exercises/${session.exercise_id}`);
  };

  const handleNext = async () => {
    if (!exercise) return;
    try {
      const next = await getNextExercise(exercise.id, exercise.cefr_level);
      if (next) {
        router.replace(`/exercises/${next.id}`);
      } else {
        router.replace("/(tabs)");
      }
    } catch {
      router.replace("/(tabs)");
    }
  };

  if (loading) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-slate-50">
        <ActivityIndicator size="large" color="#2563eb" />
      </SafeAreaView>
    );
  }

  if (!session || !exercise) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-slate-50">
        <Text className="text-slate-500">Result not found</Text>
        <TouchableOpacity
          onPress={() => router.replace("/(tabs)")}
          className="mt-4 bg-blue-600 rounded-lg px-6 py-3"
        >
          <Text className="text-white font-semibold">Go Home</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const diffResult = session.diff_result;
  const isPerfect = diffResult.overall_accuracy === 100;
  const chunks = exercise.chunks ?? [];

  return (
    <SafeAreaView className="flex-1 bg-slate-50" edges={["top"]}>
      <ScrollView contentContainerClassName="px-4 pb-8">
        {/* Header */}
        <View className="flex-row items-center py-3">
          <TouchableOpacity onPress={() => router.replace("/(tabs)")}>
            <Text className="text-blue-600 text-base">← Results</Text>
          </TouchableOpacity>
        </View>

        {/* Perfect score celebration */}
        {isPerfect && (
          <View className="items-center mb-2">
            <Text className="text-3xl">🎉</Text>
            <Text className="text-lg font-bold text-green-600 mt-1">
              Perfect! 100% Accuracy
            </Text>
            <Text className="text-sm text-slate-500">
              You got every word right!
            </Text>
          </View>
        )}

        {/* Score circle */}
        <ScoreCircle score={diffResult.overall_accuracy} />

        {/* Stats row */}
        <View className="flex-row justify-center gap-4 mb-4">
          <Text className="text-sm text-slate-600">
            {session.correct_words}/{session.total_words} words correct
          </Text>
          <Text className="text-sm text-slate-600">•</Text>
          <Text className="text-sm text-slate-600">
            {session.replay_count} replays
          </Text>
        </View>

        {/* Chunk results */}
        <Text className="text-sm font-semibold text-slate-700 mb-2">
          Breakdown
        </Text>
        {diffResult.chunks.map((cr) => {
          const exerciseChunk = chunks[cr.index];
          if (!exerciseChunk) return null;
          return (
            <ChunkResultCard
              key={cr.index}
              chunkResult={cr}
              exerciseChunk={exerciseChunk}
              audioUrl={exercise.audio_url}
              totalChunks={chunks.length}
            />
          );
        })}

        {/* Error summary — show mistakes */}
        {!isPerfect && (
          <View className="bg-red-50 rounded-xl p-3 mt-2 mb-4">
            <Text className="text-sm font-semibold text-red-700 mb-1">
              Mistakes
            </Text>
            {diffResult.chunks.flatMap((cr) =>
              cr.diff
                .filter((d) => d.status === "wrong" || d.status === "missing")
                .map((d, i) => (
                  <Text key={`${cr.index}-${i}`} className="text-xs text-red-600">
                    • "{d.expected}"
                    {d.status === "wrong" ? ` → you typed "${d.word}"` : " (missing)"}
                  </Text>
                ))
            )}
          </View>
        )}

        {/* Action buttons */}
        <View className="flex-row gap-3 mt-2">
          {!isPerfect && (
            <TouchableOpacity
              onPress={handleRetry}
              className="flex-1 border-2 border-blue-600 rounded-lg py-4 items-center"
            >
              <Text className="text-blue-600 font-semibold">RETRY</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={handleNext}
            className="flex-1 bg-blue-600 rounded-lg py-4 items-center"
          >
            <Text className="text-white font-semibold">NEXT EXERCISE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
