import { Text, View } from "react-native";
import type { DiffWord } from "../lib/types";

/** Renders DiffWord[] as colored inline text for result screen */
export function WordDiffDisplay({ diff }: { diff: DiffWord[] }) {
  return (
    <View className="flex-row flex-wrap gap-1">
      {diff.map((word, i) => (
        <DiffToken key={i} word={word} />
      ))}
    </View>
  );
}

function DiffToken({ word }: { word: DiffWord }) {
  switch (word.status) {
    case "correct":
      return <Text className="text-green-600">{word.word}</Text>;
    case "wrong":
      return (
        <View className="items-center">
          <Text className="text-red-600 line-through text-xs">
            {word.word}
          </Text>
          <Text className="text-green-700 font-medium text-sm">
            {word.expected}
          </Text>
        </View>
      );
    case "missing":
      return (
        <Text className="text-yellow-700 bg-yellow-100 px-1 rounded">
          {word.expected}
        </Text>
      );
    case "extra":
      return (
        <Text className="text-slate-400 line-through">{word.word}</Text>
      );
    default:
      return <Text>{word.word || word.expected}</Text>;
  }
}
