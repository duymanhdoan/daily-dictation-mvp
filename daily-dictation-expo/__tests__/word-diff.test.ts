import { computeWordDiff, type WordDiffResult } from '../lib/word-diff';

describe('word-diff algorithm', () => {
  describe('exact match scenarios', () => {
    it('should return 100% accuracy for identical text', () => {
      const result = computeWordDiff('hello world', 'hello world');
      expect(result.accuracy).toBe(100);
      expect(result.correct).toBe(2);
      expect(result.total).toBe(2);
      expect(result.diff.every((d) => d.status === 'correct')).toBe(true);
    });

    it('should handle single word exact match', () => {
      const result = computeWordDiff('hello', 'hello');
      expect(result.accuracy).toBe(100);
      expect(result.correct).toBe(1);
      expect(result.total).toBe(1);
      expect(result.diff[0]).toEqual({
        word: 'hello',
        expected: 'hello',
        status: 'correct',
      });
    });

    it('should handle longer exact match', () => {
      const result = computeWordDiff(
        'the quick brown fox jumps over the lazy dog',
        'the quick brown fox jumps over the lazy dog'
      );
      expect(result.accuracy).toBe(100);
      expect(result.correct).toBe(9);
      expect(result.total).toBe(9);
    });
  });

  describe('single word substitution (wrong status)', () => {
    it('should detect single word substitution', () => {
      const result = computeWordDiff('hello world', 'hello there');
      expect(result.accuracy).toBe(50);
      expect(result.correct).toBe(1);
      expect(result.total).toBe(2);

      const wrongDiff = result.diff.find((d) => d.status === 'wrong');
      expect(wrongDiff).toBeDefined();
      expect(wrongDiff?.word).toBe('there');
      expect(wrongDiff?.expected).toBe('world');
    });

    it('should handle substitution in multi-word text', () => {
      const result = computeWordDiff(
        'the cat is here',
        'the dog is here'
      );
      expect(result.accuracy).toBe(75);
      expect(result.correct).toBe(3);
      expect(result.total).toBe(4);

      const wrongDiff = result.diff.find((d) => d.status === 'wrong');
      expect(wrongDiff?.word).toBe('dog');
      expect(wrongDiff?.expected).toBe('cat');
    });

    it('should handle multiple substitutions', () => {
      const result = computeWordDiff(
        'hello world today',
        'goodbye world tomorrow'
      );
      expect(result.correct).toBe(1);
      expect(result.total).toBe(3);

      const wrongDiffs = result.diff.filter((d) => d.status === 'wrong');
      expect(wrongDiffs.length).toBeGreaterThan(0);
    });
  });

  describe('missing words', () => {
    it('should detect single missing word', () => {
      const result = computeWordDiff('hello my world', 'hello world');
      expect(result.accuracy).toBe(67); // 2 out of 3
      expect(result.correct).toBe(2);
      expect(result.total).toBe(3);

      const missingDiff = result.diff.find((d) => d.status === 'missing');
      expect(missingDiff?.expected).toBe('my');
      expect(missingDiff?.word).toBe('');
    });

    it('should detect multiple missing words', () => {
      const result = computeWordDiff(
        'the quick brown fox',
        'the fox'
      );
      expect(result.correct).toBe(2);
      expect(result.total).toBe(4);

      const missingDiffs = result.diff.filter((d) => d.status === 'missing');
      expect(missingDiffs.length).toBeGreaterThanOrEqual(2);
    });

    it('should detect missing word at start', () => {
      const result = computeWordDiff('hello world', 'world');
      expect(result.accuracy).toBe(50);
      expect(result.correct).toBe(1);
      expect(result.total).toBe(2);
    });

    it('should detect missing word at end', () => {
      const result = computeWordDiff('hello world test', 'hello world');
      expect(result.accuracy).toBe(67);
      expect(result.correct).toBe(2);
      expect(result.total).toBe(3);
    });
  });

  describe('extra words', () => {
    it('should detect single extra word', () => {
      const result = computeWordDiff('hello world', 'hello my world');
      // Accuracy = correct/expected = 2/2 = 100% (extra words don't reduce score)
      expect(result.accuracy).toBe(100);
      expect(result.correct).toBe(2);
      expect(result.total).toBe(2);

      const extraDiff = result.diff.find((d) => d.status === 'extra');
      expect(extraDiff?.word).toBe('my');
      expect(extraDiff?.expected).toBe('');
    });

    it('should detect multiple extra words', () => {
      const result = computeWordDiff(
        'hello world',
        'hello there my world'
      );
      expect(result.correct).toBe(2);
      expect(result.total).toBe(2);

      const extraDiffs = result.diff.filter((d) => d.status === 'extra');
      expect(extraDiffs.length).toBeGreaterThanOrEqual(1);
    });

    it('should detect extra word at start', () => {
      const result = computeWordDiff('world test', 'hello world test');
      expect(result.correct).toBe(2);
      expect(result.total).toBe(2);
    });

    it('should detect extra word at end', () => {
      const result = computeWordDiff('hello world', 'hello world test');
      expect(result.correct).toBe(2);
      expect(result.total).toBe(2);
    });
  });

  describe('empty input handling', () => {
    it('should return 0% accuracy for empty expected text', () => {
      const result = computeWordDiff('', 'hello world');
      expect(result.accuracy).toBe(100); // Special case: empty expected = 100%
      expect(result.correct).toBe(0);
      expect(result.total).toBe(0);
    });

    it('should handle empty user answer with non-empty expected', () => {
      const result = computeWordDiff('hello world', '');
      expect(result.accuracy).toBe(0);
      expect(result.correct).toBe(0);
      expect(result.total).toBe(2);

      const missingDiffs = result.diff.filter((d) => d.status === 'missing');
      expect(missingDiffs.length).toBe(2);
    });

    it('should handle both empty strings', () => {
      const result = computeWordDiff('', '');
      expect(result.accuracy).toBe(100);
      expect(result.correct).toBe(0);
      expect(result.total).toBe(0);
      expect(result.diff.length).toBe(0);
    });

    it('should handle whitespace-only strings as empty', () => {
      const result = computeWordDiff('   ', '');
      expect(result.accuracy).toBe(100);
      expect(result.total).toBe(0);
    });
  });

  describe('punctuation handling', () => {
    it('should ignore punctuation in comparison', () => {
      const result = computeWordDiff('hello, world!', 'hello world');
      expect(result.accuracy).toBe(100);
      expect(result.correct).toBe(2);
    });

    it('should normalize various punctuation marks', () => {
      const result = computeWordDiff(
        'hello, world! how are you?',
        'hello world how are you'
      );
      expect(result.accuracy).toBe(100);
      expect(result.correct).toBe(5);
    });

    it('should ignore punctuation even with substitutions', () => {
      const result = computeWordDiff(
        "don't worry",
        "dont worry"
      );
      expect(result.accuracy).toBe(100); // apostrophe is removed
    });

    it('should handle contractions by removing punctuation', () => {
      const result = computeWordDiff("can't", "cant");
      expect(result.accuracy).toBe(100);
    });

    it('should split hyphens into separate words and remove parentheses', () => {
      // "test-case" → "test case" (2 words), parentheses removed
      const result = computeWordDiff(
        'hello (world) and test-case',
        'hello world and test case'
      );
      expect(result.accuracy).toBe(100);
    });
  });

  describe('case handling', () => {
    it('should ignore case differences', () => {
      const result = computeWordDiff('Hello World', 'hello world');
      expect(result.accuracy).toBe(100);
      expect(result.correct).toBe(2);
    });

    it('should normalize mixed case', () => {
      const result = computeWordDiff(
        'THE QUICK BROWN FOX',
        'the quick brown fox'
      );
      expect(result.accuracy).toBe(100);
    });

    it('should handle mixed case with substitutions correctly', () => {
      const result = computeWordDiff('Hello World', 'Hello There');
      expect(result.accuracy).toBe(50);

      const wrongDiff = result.diff.find((d) => d.status === 'wrong');
      expect(wrongDiff?.word).toBe('there');
      expect(wrongDiff?.expected).toBe('world');
    });
  });

  describe('whitespace handling', () => {
    it('should handle multiple spaces between words', () => {
      const result = computeWordDiff(
        'hello  world',
        'hello world'
      );
      expect(result.accuracy).toBe(100);
    });

    it('should trim leading and trailing whitespace', () => {
      const result = computeWordDiff('  hello world  ', 'hello world');
      expect(result.accuracy).toBe(100);
    });

    it('should normalize all types of whitespace', () => {
      const result = computeWordDiff(
        'hello\t\nworld',
        'hello world'
      );
      expect(result.accuracy).toBe(100);
    });
  });

  describe('complex scenarios', () => {
    it('should handle mixture of correct, missing, and extra words', () => {
      const result = computeWordDiff(
        'the cat sat on the mat',
        'the big cat sat mat'
      );
      // Expected: "the" (correct), "cat" (correct), "sat" (correct), "on" (missing), "the" (missing), "mat" (correct)
      // User: "the" (correct), "big" (extra), "cat" (correct), "sat" (correct), "mat" (correct)
      expect(result.accuracy).toBeLessThan(100);
      expect(result.correct).toBeGreaterThan(0);
    });

    it('should compute accuracy as percentage of expected words', () => {
      const result = computeWordDiff(
        'one two three four five',
        'one two three'
      );
      expect(result.accuracy).toBe(60); // 3 out of 5
      expect(result.correct).toBe(3);
      expect(result.total).toBe(5);
    });

    it('should handle real-world dictation example', () => {
      const expected = 'The weather is nice today, isn\'t it?';
      const userAnswer = 'The weather is nice today is it';
      const result = computeWordDiff(expected, userAnswer);

      expect(result.accuracy).toBeLessThan(100);
      expect(result.correct).toBeGreaterThan(0);
      expect(result.total).toBeGreaterThan(0);
    });
  });

  describe('return value structure', () => {
    it('should return proper WordDiffResult structure', () => {
      const result = computeWordDiff('hello world', 'hello there');

      expect(result).toHaveProperty('diff');
      expect(result).toHaveProperty('accuracy');
      expect(result).toHaveProperty('correct');
      expect(result).toHaveProperty('total');

      expect(Array.isArray(result.diff)).toBe(true);
      expect(typeof result.accuracy).toBe('number');
      expect(typeof result.correct).toBe('number');
      expect(typeof result.total).toBe('number');
    });

    it('diff entries should have valid statuses', () => {
      const result = computeWordDiff(
        'hello world test',
        'hello there tests'
      );

      const validStatuses = ['correct', 'wrong', 'missing', 'extra'];
      result.diff.forEach((diff) => {
        expect(validStatuses).toContain(diff.status);
        expect(typeof diff.word).toBe('string');
        expect(typeof diff.expected).toBe('string');
      });
    });

    it('accuracy should be between 0 and 100', () => {
      const testCases = [
        { expected: 'hello', userAnswer: 'hello' },
        { expected: 'hello', userAnswer: 'world' },
        { expected: 'hello world', userAnswer: '' },
        { expected: '', userAnswer: 'hello' },
      ];

      testCases.forEach(({ expected, userAnswer }) => {
        const result = computeWordDiff(expected, userAnswer);
        expect(result.accuracy).toBeGreaterThanOrEqual(0);
        expect(result.accuracy).toBeLessThanOrEqual(100);
      });
    });
  });

  describe('edge cases', () => {
    it('should handle very long text', () => {
      const longText = 'word '.repeat(100).trim();
      const result = computeWordDiff(longText, longText);
      expect(result.accuracy).toBe(100);
      expect(result.correct).toBe(100);
    });

    it('should handle special characters that get normalized', () => {
      // "hello-world" → "hello world" (2 words), parentheses removed
      const result = computeWordDiff(
        'hello-world (test)',
        'hello world test'
      );
      expect(result.accuracy).toBe(100);
    });

    it('should maintain correct counts with complex diff patterns', () => {
      const result = computeWordDiff(
        'a b c d e',
        'a x c y e'
      );
      // Expected: a b c d e (5 words)
      // User: a x c y e (5 words)
      // Correct: a, c, e = 3
      expect(result.total).toBe(5);
      expect(result.correct).toBeLessThanOrEqual(result.total);
    });

    it('should handle when user answer is significantly longer', () => {
      const result = computeWordDiff(
        'hello',
        'hello there my beautiful world'
      );
      expect(result.total).toBe(1);
      expect(result.correct).toBe(1);
      expect(result.accuracy).toBe(100);

      const extraCount = result.diff.filter((d) => d.status === 'extra').length;
      expect(extraCount).toBeGreaterThan(0);
    });

    it('should handle when user answer is significantly shorter', () => {
      const result = computeWordDiff(
        'hello there my beautiful world',
        'hello'
      );
      expect(result.total).toBe(5);
      expect(result.correct).toBe(1);
      expect(result.accuracy).toBe(20);
    });
  });

  describe('diff ordering', () => {
    it('should maintain word order in diff output', () => {
      const result = computeWordDiff(
        'first second third',
        'first second third'
      );

      expect(result.diff[0].word).toBe('first');
      expect(result.diff[1].word).toBe('second');
      expect(result.diff[2].word).toBe('third');
    });

    it('should preserve expected word in missing entries', () => {
      const result = computeWordDiff(
        'the quick brown',
        'the brown'
      );

      const missingDiff = result.diff.find((d) => d.status === 'missing');
      expect(missingDiff?.expected).toBe('quick');
    });
  });
});
