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
import { useRouter } from "expo-router";
import { useAuth } from "../../lib/auth-context";
import { COLORS } from "../../constants/colors";
import { CEFR_COLORS } from "../../constants/colors";

const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1"] as const;

export default function RegisterScreen() {
  const { signUp } = useAuth();
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cefrLevel, setCefrLevel] = useState<string>("A1");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleRegister = async () => {
    if (!displayName || !email || !password) {
      setError("Please fill in all fields");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const { error: authError } = await signUp(
        email,
        password,
        displayName,
        cefrLevel
      );
      if (authError) setError(authError.message);
      // On success, auth state change triggers redirect automatically
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
        contentContainerClassName="flex-grow justify-center px-6 py-10"
        keyboardShouldPersistTaps="handled"
      >
        {/* Back + Header */}
        <TouchableOpacity onPress={() => router.back()} className="mb-4">
          <Text className="text-blue-600 text-base">← Back to Login</Text>
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-slate-900 mb-6">
          Create Account
        </Text>

        {/* Error */}
        {error ? (
          <View className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <Text className="text-red-600 text-center">{error}</Text>
          </View>
        ) : null}

        {/* Display name */}
        <View className="mb-4">
          <Text className="text-sm font-medium text-slate-700 mb-1">
            Display Name
          </Text>
          <TextInput
            className="bg-white border border-slate-300 rounded-lg px-4 py-3 text-base text-slate-900"
            placeholder="Your name"
            placeholderTextColor={COLORS.textSecondary}
            value={displayName}
            onChangeText={setDisplayName}
          />
        </View>

        {/* Email */}
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

        {/* Password */}
        <View className="mb-4">
          <Text className="text-sm font-medium text-slate-700 mb-1">
            Password
          </Text>
          <TextInput
            className="bg-white border border-slate-300 rounded-lg px-4 py-3 text-base text-slate-900"
            placeholder="Min 6 characters"
            placeholderTextColor={COLORS.textSecondary}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* CEFR Level Picker */}
        <View className="mb-6">
          <Text className="text-sm font-medium text-slate-700 mb-2">
            Your English Level
          </Text>
          <View className="flex-row gap-2">
            {CEFR_LEVELS.map((level) => (
              <TouchableOpacity
                key={level}
                onPress={() => setCefrLevel(level)}
                className={`flex-1 py-3 rounded-lg items-center border-2 ${
                  cefrLevel === level ? "border-blue-600" : "border-slate-200"
                }`}
                style={
                  cefrLevel === level
                    ? { backgroundColor: CEFR_COLORS[level] + "20" }
                    : undefined
                }
              >
                <Text
                  className={`font-bold text-sm ${
                    cefrLevel === level ? "text-slate-900" : "text-slate-500"
                  }`}
                >
                  {level}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Register button */}
        <TouchableOpacity
          className="bg-blue-600 rounded-lg py-4 items-center"
          onPress={handleRegister}
          disabled={loading}
          activeOpacity={0.8}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white font-semibold text-base">SIGN UP</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
