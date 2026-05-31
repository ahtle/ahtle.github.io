"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import styles from "@/app/page.module.css";
import {
  STAGE_DETAILS,
  STAGE_ENUMS,
  STAGE_ITEMS,
  type Stage,
} from "@/app/_components/stage/stage-constants";
import StageDisplay from "@/app/_components/stage/stage-display";
import StageList from "@/app/_components/stage/stage-list";
import { useDecodeText } from "@/hooks/use-decode-text";

const HEADER_FINAL = "CHOOSE YOUR STAGE";

export default function SectionFour() {
  const { text: header, startDecode } = useDecodeText(HEADER_FINAL);
  const [stage, setStage] = useState<Stage>(STAGE_ENUMS.SPARK);
  const hasTriggeredRef = useRef(false);

  const triggerSection = useCallback(() => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    startDecode();
  }, [startDecode]);

  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById("section-four");
      if (!element) return;
      const rect = element.getBoundingClientRect();
      if (rect.top <= 800 && !hasTriggeredRef.current) {
        triggerSection();
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [triggerSection]);

  return (
    <section
      id="section-four"
      className={`${styles.sectionFour} section-container`}
    >
      <h3 className="section-header">{header}</h3>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8">
        <StageList items={STAGE_ITEMS} selectedId={stage} onSelect={setStage} />
        <StageDisplay detail={STAGE_DETAILS[stage]} />
      </div>
    </section>
  );
}
