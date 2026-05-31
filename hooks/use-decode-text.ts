"use client";

import {
  deterministicScrambleText,
  runDecodeAnimation,
} from "@/lib/decode-text";
import { useCallback, useEffect, useRef, useState } from "react";

type UseDecodeTextOptions = {
  initialText?: string;
};

/**
 * Scramble/decode text state with `startDecode` trigger.
 * @param finalText `"HELLO"`
 * @returns `{ text, setText, startDecode }`
 */
export function useDecodeText(
  finalText: string,
  options?: UseDecodeTextOptions,
) {
  const { initialText } = options ?? {};
  const [text, setText] = useState(
    () => initialText ?? deterministicScrambleText(finalText),
  );
  const isDecodingRef = useRef(false);
  const cancelAnimationRef = useRef<(() => void) | null>(null);

  const startDecode = useCallback(() => {
    if (isDecodingRef.current) return;
    isDecodingRef.current = true;
    cancelAnimationRef.current?.();

    cancelAnimationRef.current = runDecodeAnimation(finalText, setText, {
      onComplete: () => {
        isDecodingRef.current = false;
        cancelAnimationRef.current = null;
      },
    });
  }, [finalText]);

  useEffect(() => {
    return () => {
      cancelAnimationRef.current?.();
    };
  }, []);

  return { text, setText, startDecode };
}
