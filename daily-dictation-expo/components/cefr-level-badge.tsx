import { Text, View } from "react-native";
import { CEFR_COLORS } from "../constants/colors";

interface CefrLevelBadgeProps {
  level: string;
  size?: "sm" | "md";
}

/** Colored CEFR level badge — A1=green, A2=blue, B1=yellow, B2=orange, C1=red */
export function CefrLevelBadge({ level, size = "sm" }: CefrLevelBadgeProps) {
  const color = CEFR_COLORS[level] ?? "#94a3b8";
  const paddingClass = size === "md" ? "px-3 py-1.5" : "px-2 py-0.5";
  const textClass = size === "md" ? "text-sm" : "text-xs";

  return (
    <View
      className={`rounded-full ${paddingClass}`}
      style={{ backgroundColor: color + "20" }}
    >
      <Text className={`font-bold ${textClass}`} style={{ color }}>
        {level}
      </Text>
    </View>
  );
}
