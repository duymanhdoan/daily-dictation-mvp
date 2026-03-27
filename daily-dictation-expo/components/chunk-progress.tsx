import { View, Text } from "react-native";

interface ChunkProgressProps {
  current: number;
  total: number;
}

/** Visual progress bar showing chunks completed */
export function ChunkProgress({ current, total }: ChunkProgressProps) {
  const pct = total > 0 ? (current / total) * 100 : 0;

  return (
    <View className="mt-3">
      <View className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <View
          className="h-full bg-blue-600 rounded-full"
          style={{ width: `${pct}%` }}
        />
      </View>
      <Text className="text-xs text-slate-500 mt-1 text-center">
        {current}/{total} completed
      </Text>
    </View>
  );
}
