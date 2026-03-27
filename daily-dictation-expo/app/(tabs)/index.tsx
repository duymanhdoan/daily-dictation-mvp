import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../lib/auth-context";
import { getExercisesWithStatus, getProfile } from "../../lib/queries";
import type { CefrLevel, ExerciseWithStatus } from "../../lib/types";
import { ExerciseCard } from "../../components/exercise-card";
import { CEFR_COLORS, COLORS } from "../../constants/colors";

const CEFR_LEVELS: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1"];

export default function ExerciseListScreen() {
  const { user, signOut } = useAuth();
  const [selectedLevel, setSelectedLevel] = useState<CefrLevel>("A1");
  const [exercises, setExercises] = useState<ExerciseWithStatus[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Load user's CEFR level as default tab
  useEffect(() => {
    if (!user) return;
    getProfile(user.id).then((profile) => {
      if (profile?.cefr_level) {
        setSelectedLevel(profile.cefr_level);
      }
    });
  }, [user]);

  const fetchExercises = useCallback(async () => {
    if (!user) return;
    try {
      const data = await getExercisesWithStatus(selectedLevel, user.id);
      setExercises(data);
    } catch (err) {
      console.error("Failed to fetch exercises:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [selectedLevel, user]);

  useEffect(() => {
    setLoading(true);
    fetchExercises();
  }, [fetchExercises]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchExercises();
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50" edges={["top"]}>
      {/* Header */}
      <View className="px-4 pt-2 pb-3 flex-row justify-between items-center">
        <Text className="text-2xl font-bold text-slate-900">Exercises</Text>
        <TouchableOpacity onPress={signOut}>
          <Text className="text-sm text-slate-500">Sign Out</Text>
        </TouchableOpacity>
      </View>

      {/* CEFR Tabs */}
      <View className="flex-row px-4 mb-3 gap-2">
        {CEFR_LEVELS.map((level) => {
          const isSelected = level === selectedLevel;
          return (
            <TouchableOpacity
              key={level}
              onPress={() => setSelectedLevel(level)}
              className={`flex-1 py-2.5 rounded-lg items-center border-2 ${
                isSelected ? "border-blue-600" : "border-slate-200"
              }`}
              style={
                isSelected
                  ? { backgroundColor: CEFR_COLORS[level] + "20" }
                  : undefined
              }
            >
              <Text
                className={`font-bold text-sm ${
                  isSelected ? "text-slate-900" : "text-slate-400"
                }`}
              >
                {level}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Exercise List */}
      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      ) : (
        <FlatList
          data={exercises}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ExerciseCard exercise={item} />}
          contentContainerClassName="px-4 pb-4"
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={
            <View className="items-center mt-20">
              <Text className="text-slate-400 text-base">
                No exercises for {selectedLevel}
              </Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}
