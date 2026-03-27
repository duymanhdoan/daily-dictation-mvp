import { Tabs } from "expo-router";
import { Text } from "react-native";

/** Tab navigator — single Home tab for MVP, expandable later */
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2563eb",
        tabBarInactiveTintColor: "#94a3b8",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Exercises",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>🎧</Text>
          ),
        }}
      />
    </Tabs>
  );
}
