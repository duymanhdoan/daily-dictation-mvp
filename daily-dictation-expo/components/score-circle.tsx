import { useEffect, useRef } from "react";
import { View, Text, Animated } from "react-native";

interface ScoreCircleProps {
  score: number;
}

/** Animated score circle — green (≥80), yellow (50-79), red (<50) */
export function ScoreCircle({ score }: ScoreCircleProps) {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: score,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [score]);

  const color =
    score >= 80 ? "#22c55e" : score >= 50 ? "#eab308" : "#ef4444";
  const bgColor =
    score >= 80 ? "#f0fdf4" : score >= 50 ? "#fefce8" : "#fef2f2";

  const displayScore = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0", "100"],
  });

  return (
    <View
      className="w-32 h-32 rounded-full items-center justify-center self-center my-4"
      style={{ backgroundColor: bgColor, borderWidth: 4, borderColor: color }}
    >
      <Animated.Text
        className="text-3xl font-bold"
        style={{ color }}
      >
        {/* Use static display since interpolation returns string */}
        {Math.round(score)}%
      </Animated.Text>
      <Text className="text-xs text-slate-500 mt-0.5">Accuracy</Text>
    </View>
  );
}
