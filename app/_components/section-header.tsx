"use client";

import { useCallback, useEffect, useRef } from "react";
import { useDecodeText } from "@/hooks/use-decode-text";

interface SectionHeaderProps {
  sectionId: string;
  text: string;
  onTriggered?: () => void;
}

export default function SectionHeader({
  sectionId,
  text,
  onTriggered,
}: SectionHeaderProps) {
  const { text: header, startDecode } = useDecodeText(text);
  const hasTriggeredRef = useRef(false);

  const triggerSection = useCallback(() => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    startDecode();
    if (onTriggered) {
      onTriggered();
    }
  }, [startDecode, onTriggered]);

  useEffect(() => {
    const onScroll = (): void => {
      const element = document.getElementById(sectionId);
      if (!element) return;
      const rect = element.getBoundingClientRect();
      if (rect.top <= 800 && !hasTriggeredRef.current) {
        triggerSection();
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [sectionId, triggerSection]);

  return <h3 className="section-header">{header}</h3>;
}
