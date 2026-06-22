"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { useDecodeText } from "@/hooks/use-decode-text";

interface SectionHeaderProps {
  sectionId: string;
  text: string;
  onTriggered?: () => void;
}

const VISIBILITY_TOP_OFFSET = 800;

export default function SectionHeader({
  sectionId,
  text,
  onTriggered,
}: SectionHeaderProps) {
  const pathname = usePathname();
  const { text: header, startDecode } = useDecodeText(text);
  const hasTriggeredRef = useRef(false);

  const triggerSection = useCallback(() => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    startDecode();
    onTriggered?.();
  }, [startDecode, onTriggered]);

  useEffect(() => {
    hasTriggeredRef.current = false;

    const checkVisibility = (): void => {
      const element = document.getElementById(sectionId);
      if (!element || hasTriggeredRef.current) return;
      const rect = element.getBoundingClientRect();
      if (rect.top <= VISIBILITY_TOP_OFFSET) {
        triggerSection();
      }
    };

    checkVisibility();

    window.addEventListener("scroll", checkVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, [sectionId, triggerSection, text, pathname]);

  return <h3 className="section-header">{header}</h3>;
}
