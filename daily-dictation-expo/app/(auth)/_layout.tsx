import { Stack } from "expo-router";

/** Auth stack — no header, screens have custom headers */
export default function AuthLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
