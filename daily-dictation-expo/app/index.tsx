import { Redirect } from "expo-router";
import { useAuth } from "../lib/auth-context";

/** Entry point — redirects to auth or tabs based on session */
export default function Index() {
  const { session } = useAuth();
  return session ? <Redirect href="/(tabs)" /> : <Redirect href="/(auth)/login" />;
}
