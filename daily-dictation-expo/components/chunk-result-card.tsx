import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import type { ChunkResult, ExerciseChunk } from "../lib/types";
import { WordDiffDisplay } from "./word-diff-display";
import { AudioPlayer } from "./audio-player";

interface ChunkResultCardProps {
  chunkResult: ChunkResult;
  exerciseChunk: ExerciseChunk;
  audioUrl: string;
  totalChunks: number;
}

/** Expandable per-chunk result card with replay and word diff */
export function ChunkResultCard({
  chunkResult,
  exerciseChunk,
  audioUrl,
  totalChunks,
}: ChunkResultCardProps) {
  const [expanded, setExpanded] = useState(chunkResult.accuracy < 100);
  const isPerfect = chunkResult.accuracy === 100;

  return (
    <View className="bg-white rounded-xl border border-slate-100 mb-3 overflow-hidden">
      {/* Header — always visible */}
      <TouchableOpacity
        onPress={() => setExpanded(!expanded)}
        className="flex-row items-center justify-between p-3"
      >
        <View className="flex-row items-center gap-2 flex-1">
          <Text className="text-sm font-medium text-slate-700">
            Sentence {chunkResult.index + 1}
          </Text>
          {isPerfect ? (
            <Text className="text-xs text-green-600 font-medium">
              ✓ 100%
            </Text>
          ) : (
            <Text className="text-xs text-orange-500 font-medium">
              {chunkResult.accuracy}%
            </Text>
          )}
        </View>
        <AudioPlayer
          audioUrl={audioUrl}
          chunk={exerciseChunk}
          chunkIndex={chunkResult.index}
          totalChunks={totalChunks}
          mini
        />
      </TouchableOpacity>

      {/* Expanded: word diff details */}
      {expanded && !isPerfect && (
        <View className="px-3 pb-3 border-t border-slate-50 pt-2">
          <Text className="text-xs text-slate-400 mb-1">Expected:</Text>
          <WordDiffDisplay diff={chunkResult.diff} />
          <Text className="text-xs text-slate-400 mt-2">You typed:</Text>
          <Text className="text-sm text-slate-600">
            {chunkResult.user_answer}
          </Text>
        </View>
      )}
    </View>
  );
}
