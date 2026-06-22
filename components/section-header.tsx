"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { useDecodeText } from "@/hooks/use-decode-text";
import { useNavigationKey } from "@/hooks/use-navigation-key";

interface SectionHeaderProps {
  sectionId: string;
  text: string;
  onTriggered?: () => void;
}

const VISIBILITY_ROOT_MARGIN = "800px 0px 0px 0px";

export default function SectionHeader({
  sectionId,
  text,
  onTriggered,
}: SectionHeaderProps) {
  const pathname = usePathname();
  const navigationKey = useNavigationKey();
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
    hasTriggeredRef.current = false;
  }, [text, pathname, navigationKey]);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let rafId = 0;

    const observe = (): void => {
      const element = document.getElementById(sectionId);
      if (!element) {
        rafId = requestAnimationFrame(observe);
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting && !hasTriggeredRef.current) {
            triggerSection();
          }
        },
        { rootMargin: VISIBILITY_ROOT_MARGIN, threshold: 0 },
      );
      observer.observe(element);

      const rect = element.getBoundingClientRect();
      if (rect.top <= 800 && !hasTriggeredRef.current) {
        triggerSection();
      }
    };

    observe();

    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, [sectionId, triggerSection, text, pathname, navigationKey]);

  return <h3 className="section-header">{header}</h3>;
}
