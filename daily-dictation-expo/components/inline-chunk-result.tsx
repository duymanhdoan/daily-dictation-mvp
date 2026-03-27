import { View, Text } from "react-native";
import type { DiffWord } from "../lib/types";

/** Inline colored word diff shown after checking a chunk */
export function InlineChunkResult({
  diff,
  accuracy,
}: {
  diff: DiffWord[];
  accuracy: number;
}) {
  return (
    <View className="bg-slate-50 rounded-lg p-3 mt-2">
      <View className="flex-row flex-wrap gap-1">
        {diff.map((word, i) => (
          <WordToken key={i} word={word} />
        ))}
      </View>
      <Text className="text-xs text-slate-500 mt-2">
        Accuracy: {accuracy}%
      </Text>
    </View>
  );
}

function WordToken({ word }: { word: DiffWord }) {
  switch (word.status) {
    case "correct":
      return <Text className="text-green-600 font-medium">{word.word}</Text>;
    case "wrong":
      return (
        <View>
          <Text className="text-red-600 font-medium line-through">
            {word.word}
          </Text>
          <Text className="text-green-600 text-xs">{word.expected}</Text>
        </View>
      );
    case "missing":
      return (
        <Text className="text-yellow-600 bg-yellow-50 px-1 rounded text-sm">
          [{word.expected}]
        </Text>
      );
    case "extra":
      return (
        <Text className="text-slate-400 line-through text-sm">
          {word.word}
        </Text>
      );
    default:
      return <Text>{word.word || word.expected}</Text>;
  }
}
