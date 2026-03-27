import { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Audio, AVPlaybackStatus } from "expo-av";
import type { ExerciseChunk } from "../lib/types";

const SPEED_OPTIONS = [0.5, 0.75, 1.0, 1.25];

interface AudioPlayerProps {
  audioUrl: string;
  chunk: ExerciseChunk;
  chunkIndex: number;
  totalChunks: number;
  onChunkEnd?: () => void;
  /** Mini mode for result screen replay */
  mini?: boolean;
}

/** Audio player with chunk-aware playback, speed control, and replay */
export function AudioPlayer({
  audioUrl,
  chunk,
  chunkIndex,
  totalChunks,
  onChunkEnd,
  mini = false,
}: AudioPlayerProps) {
  const soundRef = useRef<Audio.Sound | null>(null);
  const chunkRef = useRef(chunk);
  const onChunkEndRef = useRef(onChunkEnd);
  const chunkEndFiredRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speedIndex, setSpeedIndex] = useState(2); // 1.0x default
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Keep refs in sync with props to avoid stale closures in playback callback
  chunkRef.current = chunk;
  onChunkEndRef.current = onChunkEnd;

  // Reset chunk-end guard when chunk changes
  useEffect(() => {
    chunkEndFiredRef.current = false;
  }, [chunkIndex]);

  useEffect(() => {
    loadAudio();
    return () => {
      soundRef.current?.unloadAsync();
    };
  }, [audioUrl]);

  const loadAudio = async () => {
    try {
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: false,
      });

      const { sound } = await Audio.Sound.createAsync(
        { uri: audioUrl },
        { progressUpdateIntervalMillis: 50 }
      );

      soundRef.current = sound;
      setIsLoaded(true);

      sound.setOnPlaybackStatusUpdate(handlePlaybackStatus);
    } catch (err) {
      console.error("Failed to load audio:", err);
    }
  };

  const handlePlaybackStatus = (status: AVPlaybackStatus) => {
    if (!status.isLoaded) return;
    const currentChunk = chunkRef.current;

    setIsPlaying(status.isPlaying);

    // Calculate chunk-relative progress using ref (avoids stale closure)
    const chunkDuration = currentChunk.end_ms - currentChunk.start_ms;
    if (chunkDuration > 0) {
      const elapsed = status.positionMillis - currentChunk.start_ms;
      setProgress(Math.max(0, Math.min(1, elapsed / chunkDuration)));
    }

    // Auto-stop at chunk boundary — guarded to fire only once per chunk
    if (
      status.isPlaying &&
      status.positionMillis >= currentChunk.end_ms - 100 &&
      !chunkEndFiredRef.current
    ) {
      chunkEndFiredRef.current = true;
      soundRef.current?.pauseAsync();
      setIsPlaying(false);
      onChunkEndRef.current?.();
    }
  };

  const playChunk = async () => {
    if (!soundRef.current || !isLoaded) return;
    await soundRef.current.setPositionAsync(chunk.start_ms);
    await soundRef.current.setRateAsync(SPEED_OPTIONS[speedIndex], true);
    await soundRef.current.playAsync();
  };

  const togglePlay = async () => {
    if (isPlaying) {
      await soundRef.current?.pauseAsync();
    } else {
      await playChunk();
    }
  };

  const replay = async () => {
    await playChunk();
  };

  const cycleSpeed = () => {
    const next = (speedIndex + 1) % SPEED_OPTIONS.length;
    setSpeedIndex(next);
    soundRef.current?.setRateAsync(SPEED_OPTIONS[next], true);
  };

  if (mini) {
    return (
      <TouchableOpacity
        onPress={playChunk}
        className="w-8 h-8 rounded-full bg-blue-100 items-center justify-center"
      >
        <Text className="text-blue-600 text-sm">▶</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View className="bg-slate-100 rounded-xl p-4">
      {/* Chunk indicator */}
      <Text className="text-center text-sm text-slate-500 mb-3">
        Sentence {chunkIndex + 1} / {totalChunks}
      </Text>

      {/* Controls row */}
      <View className="flex-row items-center justify-center gap-6 mb-3">
        <TouchableOpacity
          onPress={cycleSpeed}
          className="bg-slate-200 rounded-lg px-3 py-2"
        >
          <Text className="text-sm font-medium text-slate-700">
            {SPEED_OPTIONS[speedIndex]}x
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={togglePlay}
          className="w-14 h-14 rounded-full bg-blue-600 items-center justify-center"
          disabled={!isLoaded}
        >
          <Text className="text-white text-xl">
            {isPlaying ? "⏸" : "▶"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={replay}
          className="bg-slate-200 rounded-lg px-3 py-2"
          disabled={!isLoaded}
        >
          <Text className="text-sm font-medium text-slate-700">↻</Text>
        </TouchableOpacity>
      </View>

      {/* Progress bar */}
      <View className="h-1.5 bg-slate-300 rounded-full overflow-hidden">
        <View
          className="h-full bg-blue-600 rounded-full"
          style={{ width: `${progress * 100}%` }}
        />
      </View>
    </View>
  );
}
