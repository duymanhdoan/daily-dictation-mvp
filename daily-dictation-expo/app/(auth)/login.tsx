import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import { useAuth } from "../../lib/auth-context";
import { COLORS } from "../../constants/colors";

export default function LoginScreen() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const { error: authError } = await signIn(email, password);
      if (authError) setError(authError.message);
    } catch (e) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-slate-50"
    >
      <ScrollView
        contentContainerClassName="flex-1 justify-center px-6"
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo area */}
        <View className="items-center mb-10">
          <Text className="text-4xl font-bold text-blue-600">🎧</Text>
          <Text className="text-2xl font-bold text-slate-900 mt-2">
            Daily Dictation
          </Text>
          <Text className="text-base text-slate-500 mt-1">
            Practice English listening every day
          </Text>
        </View>

        {/* Error message */}
        {error ? (
          <View className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <Text className="text-red-600 text-center">{error}</Text>
          </View>
        ) : null}

        {/* Email input */}
        <View className="mb-4">
          <Text className="text-sm font-medium text-slate-700 mb-1">
            Email
          </Text>
          <TextInput
            className="bg-white border border-slate-300 rounded-lg px-4 py-3 text-base text-slate-900"
            placeholder="your@email.com"
            placeholderTextColor={COLORS.textSecondary}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />
        </View>

        {/* Password input */}
        <View className="mb-6">
          <Text className="text-sm font-medium text-slate-700 mb-1">
            Password
          </Text>
          <TextInput
            className="bg-white border border-slate-300 rounded-lg px-4 py-3 text-base text-slate-900"
            placeholder="Enter password"
            placeholderTextColor={COLORS.textSecondary}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Login button */}
        <TouchableOpacity
          className="bg-blue-600 rounded-lg py-4 items-center"
          onPress={handleLogin}
          disabled={loading}
          activeOpacity={0.8}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white font-semibold text-base">LOG IN</Text>
          )}
        </TouchableOpacity>

        {/* Register link */}
        <View className="flex-row justify-center mt-6">
          <Text className="text-slate-500">Don't have an account? </Text>
          <Link href="/(auth)/register" asChild>
            <TouchableOpacity>
              <Text className="text-blue-600 font-semibold">Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
