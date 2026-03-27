/**
 * Word-level diff algorithm using Longest Common Subsequence (LCS).
 * Compares expected transcript vs user answer at token level.
 * Returns colored diff + accuracy score.
 */

import type { DiffWord } from "./types";

/** Normalize text: lowercase, trim, remove punctuation */
function normalize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[.,!?;:'"()]/g, "")
    .replace(/-/g, " ")  // hyphens → spaces so "twenty-five" becomes two words
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

/** Compute LCS table for two word arrays */
function lcsTable(a: string[], b: string[]): number[][] {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp;
}

/** Backtrack LCS to produce word-level diff */
function backtrackDiff(
  expected: string[],
  userWords: string[],
  dp: number[][]
): DiffWord[] {
  const result: DiffWord[] = [];
  let i = expected.length;
  let j = userWords.length;

  // Collect in reverse, then flip
  const reversed: DiffWord[] = [];

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && expected[i - 1] === userWords[j - 1]) {
      reversed.push({
        word: userWords[j - 1],
        expected: expected[i - 1],
        status: "correct",
      });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      // Extra word typed by user
      reversed.push({
        word: userWords[j - 1],
        expected: "",
        status: "extra",
      });
      j--;
    } else {
      // Missing word user didn't type
      reversed.push({
        word: "",
        expected: expected[i - 1],
        status: "missing",
      });
      i--;
    }
  }

  reversed.reverse();

  // Post-process: adjacent missing+extra → substitution (wrong)
  for (let k = 0; k < reversed.length; k++) {
    const curr = reversed[k];
    const next = reversed[k + 1];

    if (
      curr.status === "missing" &&
      next?.status === "extra"
    ) {
      result.push({
        word: next.word,
        expected: curr.expected,
        status: "wrong",
      });
      k++; // skip next
    } else if (
      curr.status === "extra" &&
      next?.status === "missing"
    ) {
      result.push({
        word: curr.word,
        expected: next.expected,
        status: "wrong",
      });
      k++; // skip next
    } else {
      result.push(curr);
    }
  }

  return result;
}

export interface WordDiffResult {
  diff: DiffWord[];
  accuracy: number;
  correct: number;
  total: number;
}

/** Compare expected transcript against user's answer. Returns diff + accuracy. */
export function computeWordDiff(
  expected: string,
  userAnswer: string
): WordDiffResult {
  const expectedWords = normalize(expected);
  const userWords = normalize(userAnswer);

  if (expectedWords.length === 0) {
    return { diff: [], accuracy: 100, correct: 0, total: 0 };
  }

  const dp = lcsTable(expectedWords, userWords);
  const diff = backtrackDiff(expectedWords, userWords, dp);

  const correct = diff.filter((d) => d.status === "correct").length;
  const total = expectedWords.length;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

  return { diff, accuracy, correct, total };
}
