const SCRAMBLE_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()[]{}|/<>?~`";

export const DECODE_STEP_MS = 100;

export type DecodeTextOptions = {
  onComplete?: () => void;
};

export function getDecodeFrameCount(finalText: string): number {
  return Math.max(finalText.length, 1);
}

function pickScrambleChar(seed: number): string {
  return SCRAMBLE_CHARS[Math.abs(seed) % SCRAMBLE_CHARS.length]!;
}

/**
 * Given a final text, return a scrambled version
 * e.g. "Final text" -> "avn@3 !$fc"
 *
 * @param finalText
 * @returns
 */
export function deterministicScrambleText(finalText: string): string {
  return [...finalText]
    .map((char, index) => {
      if (char === " ") return " ";
      const seed = finalText.charCodeAt(index) + index * 31;
      return pickScrambleChar(seed);
    })
    .join("");
}

function scrambleText(finalText: string, lockedPrefixLength: number): string {
  return [...finalText]
    .map((char, index) => {
      if (index < lockedPrefixLength) return char;
      if (char === " ") return " ";
      return pickScrambleChar(
        Math.floor(Math.random() * SCRAMBLE_CHARS.length),
      );
    })
    .join("");
}

function generateDecodeFrames(finalText: string): string[] {
  const frameCount = getDecodeFrameCount(finalText);
  const length = finalText.length;

  return Array.from({ length: frameCount }, (_, step) => {
    const stepIndex = step + 1;
    if (stepIndex === frameCount) return finalText;
    const locked = Math.floor((length * stepIndex) / frameCount);
    return scrambleText(finalText, locked);
  });
}

/**
 * Runs the decode animation. Returns a cancel function (clears pending timeouts).
 */
export function runDecodeAnimation(
  finalText: string,
  onFrame: (text: string) => void,
  options?: DecodeTextOptions,
): () => void {
  const frames = generateDecodeFrames(finalText);
  const timeoutIds: ReturnType<typeof setTimeout>[] = [];

  frames.forEach((frame, index) => {
    const id = setTimeout(() => {
      onFrame(frame);
      if (index === frames.length - 1) {
        options?.onComplete?.();
      }
    }, index * DECODE_STEP_MS);
    timeoutIds.push(id);
  });

  return () => {
    timeoutIds.forEach(clearTimeout);
  };
}
