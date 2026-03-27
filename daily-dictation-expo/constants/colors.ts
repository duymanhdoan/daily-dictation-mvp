/** App color constants — CEFR level colors + theme palette */

export const CEFR_COLORS: Record<string, string> = {
  A1: "#22c55e", // green
  A2: "#3b82f6", // blue
  B1: "#eab308", // yellow
  B2: "#f97316", // orange
  C1: "#ef4444", // red
};

export const COLORS = {
  primary: "#2563eb",
  primaryLight: "#dbeafe",
  background: "#f8fafc",
  surface: "#ffffff",
  text: "#0f172a",
  textSecondary: "#64748b",
  border: "#e2e8f0",
  error: "#ef4444",
  success: "#22c55e",
  warning: "#f59e0b",
} as const;
