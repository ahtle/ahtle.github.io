"use client";

import { usePathname } from "next/navigation";
import { useCallback, useLayoutEffect, useRef } from "react";
import { useDecodeText } from "@/hooks/use-decode-text";
import { useHistoryVersion } from "@/hooks/use-history-version";

interface SectionHeaderProps {
  sectionId: string;
  text: string;
  onTriggered?: () => void;
  /** Decode immediately on mount instead of waiting for scroll visibility. */
  decodeOnMount?: boolean;
}

const VISIBILITY_ROOT_MARGIN = "800px 0px 0px 0px";
const VISIBILITY_TOP_OFFSET = 800;

export default function SectionHeader({
  sectionId,
  text,
  onTriggered,
  decodeOnMount = false,
}: SectionHeaderProps) {
  const pathname = usePathname();
  const historyVersion = useHistoryVersion();
  const { text: header, startDecode } = useDecodeText(text);
  const hasTriggeredRef = useRef(false);

  const triggerSection = useCallback(() => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    startDecode();
    onTriggered?.();
  }, [startDecode, onTriggered]);

  useLayoutEffect(() => {
    hasTriggeredRef.current = false;

    if (decodeOnMount) {
      triggerSection();
      return;
    }

    const checkVisibility = (): void => {
      const element = document.getElementById(sectionId);
      if (!element || hasTriggeredRef.current) return;
      const rect = element.getBoundingClientRect();
      if (rect.top <= VISIBILITY_TOP_OFFSET) {
        triggerSection();
      }
    };

    checkVisibility();

    const element = document.getElementById(sectionId);
    const observer = element
      ? new IntersectionObserver(
          ([entry]) => {
            if (entry?.isIntersecting) {
              triggerSection();
            }
          },
          { rootMargin: VISIBILITY_ROOT_MARGIN, threshold: 0 },
        )
      : null;

    if (element && observer) {
      observer.observe(element);
    }

    window.addEventListener("scroll", checkVisibility, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", checkVisibility);
    };
  }, [
    sectionId,
    triggerSection,
    text,
    pathname,
    historyVersion,
    decodeOnMount,
  ]);

  return <h3 className="section-header">{header}</h3>;
}
