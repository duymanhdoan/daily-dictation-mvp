import { useEffect, useReducer, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../lib/auth-context";
import { getExerciseById, createSession } from "../../lib/queries";
import { computeWordDiff } from "../../lib/word-diff";
import type { Exercise, ChunkResult } from "../../lib/types";
import { AudioPlayer } from "../../components/audio-player";
import { InlineChunkResult } from "../../components/inline-chunk-result";
import { ChunkProgress } from "../../components/chunk-progress";
import { CefrLevelBadge } from "../../components/cefr-level-badge";

// -- State machine --

type Phase = "loading" | "listen" | "type" | "check" | "complete" | "error";

interface DictationState {
  phase: Phase;
  exercise: Exercise | null;
  currentChunkIndex: number;
  chunkResults: ChunkResult[];
  userInput: string;
  replayCount: number;
  speedRate: number;
  errorMessage?: string;
}

type Action =
  | { type: "LOADED"; exercise: Exercise }
  | { type: "SET_ERROR"; message: string }
  | { type: "START_TYPING" }
  | { type: "SET_INPUT"; text: string }
  | { type: "CHECK_CHUNK"; result: ChunkResult }
  | { type: "NEXT_CHUNK" }
  | { type: "COMPLETE" }
  | { type: "INCREMENT_REPLAY" };

function reducer(state: DictationState, action: Action): DictationState {
  switch (action.type) {
    case "LOADED":
      return { ...state, phase: "listen", exercise: action.exercise };
    case "SET_ERROR":
      return { ...state, phase: "error", errorMessage: action.message };
    case "START_TYPING":
      return { ...state, phase: "type" };
    case "SET_INPUT":
      return { ...state, userInput: action.text };
    case "CHECK_CHUNK":
      return {
        ...state,
        phase: "check",
        chunkResults: [...state.chunkResults, action.result],
      };
    case "NEXT_CHUNK": {
      const nextIndex = state.currentChunkIndex + 1;
      const totalChunks = state.exercise?.chunks?.length ?? 0;
      if (nextIndex >= totalChunks) {
        return { ...state, phase: "complete" };
      }
      return {
        ...state,
        phase: "listen",
        currentChunkIndex: nextIndex,
        userInput: "",
      };
    }
    case "COMPLETE":
      return { ...state, phase: "complete" };
    case "INCREMENT_REPLAY":
      return { ...state, replayCount: state.replayCount + 1 };
    default:
      return state;
  }
}

const initialState: DictationState = {
  phase: "loading",
  exercise: null,
  currentChunkIndex: 0,
  chunkResults: [],
  userInput: "",
  replayCount: 0,
  speedRate: 1.0,
};

export default function DictationScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { user } = useAuth();
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef<TextInput>(null);

  // Load exercise
  useEffect(() => {
    if (!id) return;
    getExerciseById(id)
      .then((exercise) => {
        if (!exercise) {
          dispatch({ type: "SET_ERROR", message: "Exercise not found" });
          return;
        }
        dispatch({ type: "LOADED", exercise });
      })
      .catch(() => {
        dispatch({ type: "SET_ERROR", message: "Failed to load exercise" });
      });
  }, [id]);

  // Auto-focus input when entering type phase
  useEffect(() => {
    if (state.phase === "type") {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [state.phase]);

  const handleChunkEnd = () => {
    dispatch({ type: "START_TYPING" });
  };

  const handleCheck = () => {
    if (!state.exercise) return;
    const chunk = state.exercise.chunks[state.currentChunkIndex];
    const { diff, accuracy, correct, total } = computeWordDiff(
      chunk.transcript,
      state.userInput
    );

    dispatch({
      type: "CHECK_CHUNK",
      result: {
        index: state.currentChunkIndex,
        user_answer: state.userInput,
        diff,
        accuracy,
      },
    });
  };

  const handleNextChunk = () => {
    dispatch({ type: "NEXT_CHUNK" });
  };

  const handleComplete = async () => {
    if (!state.exercise || !user) return;

    const totalCorrect = state.chunkResults.reduce(
      (sum, c) => sum + c.diff.filter((d) => d.status === "correct").length,
      0
    );
    const totalWords = state.chunkResults.reduce(
      (sum, c) =>
        sum + c.diff.filter((d) => d.status !== "extra").length,
      0
    );
    const overallAccuracy =
      totalWords > 0 ? Math.round((totalCorrect / totalWords) * 100) : 0;

    try {
      const session = await createSession({
        user_id: user.id,
        exercise_id: state.exercise.id,
        user_answer: state.chunkResults.map((c) => c.user_answer).join(" "),
        accuracy_score: overallAccuracy,
        correct_words: totalCorrect,
        total_words: totalWords,
        diff_result: {
          chunks: state.chunkResults,
          overall_accuracy: overallAccuracy,
        },
        replay_count: state.replayCount,
        speed_used: state.speedRate,
      });
      router.replace(`/results/${session.id}`);
    } catch (err) {
      Alert.alert("Error", "Failed to save result. Please try again.");
    }
  };

  const { exercise, phase, currentChunkIndex, chunkResults, userInput } = state;

  // Loading / Error states
  if (phase === "loading") {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-slate-50">
        <ActivityIndicator size="large" color="#2563eb" />
      </SafeAreaView>
    );
  }

  if (phase === "error") {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-slate-50 px-6">
        <Text className="text-red-600 text-lg mb-4">{state.errorMessage}</Text>
        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-blue-600 rounded-lg px-6 py-3"
        >
          <Text className="text-white font-semibold">Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  if (!exercise) return null;

  const chunks = exercise.chunks ?? [];

  // Guard: no chunks available — show error
  if (chunks.length === 0) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-slate-50 px-6">
        <Text className="text-slate-600 text-lg mb-4">This exercise has no audio chunks.</Text>
        <TouchableOpacity onPress={() => router.back()} className="bg-blue-600 rounded-lg px-6 py-3">
          <Text className="text-white font-semibold">Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const currentChunk = chunks[currentChunkIndex];
  const isLastChunk = currentChunkIndex >= chunks.length - 1;

  return (
    <SafeAreaView className="flex-1 bg-slate-50" edges={["top"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          className="flex-1"
          contentContainerClassName="px-4 pb-6"
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View className="flex-row items-center justify-between py-3">
            <TouchableOpacity onPress={() => router.back()}>
              <Text className="text-blue-600 text-base">← Back</Text>
            </TouchableOpacity>
            <View className="flex-row items-center gap-2">
              <CefrLevelBadge level={exercise.cefr_level} size="md" />
            </View>
          </View>

          {/* Title */}
          <Text className="text-xl font-bold text-slate-900 mb-4">
            {exercise.title}
          </Text>

          {/* Audio Player */}
          {currentChunk && (
            <AudioPlayer
              audioUrl={exercise.audio_url}
              chunk={currentChunk}
              chunkIndex={currentChunkIndex}
              totalChunks={chunks.length}
              onChunkEnd={handleChunkEnd}
            />
          )}

          {/* Text input — visible in type and listen phases */}
          {(phase === "type" || phase === "listen") && (
            <View className="mt-4">
              <TextInput
                ref={inputRef}
                className="bg-white border border-slate-300 rounded-lg px-4 py-3 text-base text-slate-900 min-h-[80px]"
                placeholder="Type what you hear..."
                placeholderTextColor="#94a3b8"
                value={userInput}
                onChangeText={(text) =>
                  dispatch({ type: "SET_INPUT", text })
                }
                multiline
                textAlignVertical="top"
                onFocus={() => {
                  if (phase === "listen") dispatch({ type: "START_TYPING" });
                }}
              />

              <TouchableOpacity
                onPress={handleCheck}
                className="bg-blue-600 rounded-lg py-4 items-center mt-3"
                disabled={!userInput.trim()}
                style={{ opacity: userInput.trim() ? 1 : 0.5 }}
              >
                <Text className="text-white font-semibold text-base">
                  CHECK
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Check result — inline diff */}
          {phase === "check" && chunkResults.length > 0 && (
            <View className="mt-4">
              <InlineChunkResult
                diff={chunkResults[chunkResults.length - 1].diff}
                accuracy={chunkResults[chunkResults.length - 1].accuracy}
              />

              <TouchableOpacity
                onPress={isLastChunk ? handleComplete : handleNextChunk}
                className="bg-blue-600 rounded-lg py-4 items-center mt-3"
              >
                <Text className="text-white font-semibold text-base">
                  {isLastChunk ? "SEE RESULTS" : "NEXT SENTENCE →"}
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Chunk progress */}
          <ChunkProgress
            current={chunkResults.length}
            total={chunks.length}
          />

          {/* Previous chunk summaries */}
          {chunkResults.length > 0 && phase !== "complete" && (
            <View className="mt-4">
              <Text className="text-xs text-slate-400 mb-2">
                Previous sentences:
              </Text>
              {chunkResults
                .slice(0, -1 * (phase === "check" ? 0 : 1) || undefined)
                .map((cr) => (
                  <View
                    key={cr.index}
                    className="bg-white rounded-lg p-2 mb-1 border border-slate-100"
                  >
                    <Text className="text-xs text-slate-600">
                      ✓ Sentence {cr.index + 1}: {cr.accuracy}%
                    </Text>
                  </View>
                ))}
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
