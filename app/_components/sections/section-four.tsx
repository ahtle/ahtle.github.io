"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import styles from "../../page.module.css";
import { useDecodeText } from "@/app/_hooks/use-decode-text";
import StageList, {
  type StageListItem,
} from "@/app/_components/stage/stage-list";
import SparkPng from "../../../public/images/spark.png";
import SparkBwPng from "../../../public/images/spark-bw.png";
import StanfordPng from "../../../public/images/stanford.png";
import StanfordBwPng from "../../../public/images/stanford-bw.png";
import BDPng from "../../../public/images/bd.png";
import BDBwPng from "../../../public/images/bd-bw.png";
import ThinkfulPng from "../../../public/images/thinkful.png";
import ThinkfulBwPng from "../../../public/images/thinkful-bw.png";
import SJSUPng from "../../../public/images/sjsu.png";
import SJSUBwPng from "../../../public/images/sjsu-bw.png";

const HEADER_FINAL = "CHOOSE YOUR STAGE";

const STAGES = {
  SPARK: "SPARK",
  STANFORD: "STANFORD",
  BD: "BD",
  THINKFUL: "THINKFUL",
  SJSU: "SJSU",
} as const;
type Stage = (typeof STAGES)[keyof typeof STAGES]; // "SPARK" | "STANFORD"

const STAGE_ITEMS: StageListItem<Stage>[] = [
  {
    id: STAGES.SPARK,
    colorImage: SparkPng,
    bwImage: SparkBwPng,
    alt: "Spark",
  },
  {
    id: STAGES.STANFORD,
    colorImage: StanfordPng,
    bwImage: StanfordBwPng,
    alt: "Stanford",
  },
  {
    id: STAGES.BD,
    colorImage: BDPng,
    bwImage: BDBwPng,
    alt: "Becton Dickenson Biosciences",
  },
  {
    id: STAGES.THINKFUL,
    colorImage: ThinkfulPng,
    bwImage: ThinkfulBwPng,
    alt: "Thinkful",
  },
  {
    id: STAGES.SJSU,
    colorImage: SJSUPng,
    bwImage: SJSUBwPng,
    alt: "San Jose State University",
  },
];

export default function SectionFour() {
  const { text: header, startDecode } = useDecodeText(HEADER_FINAL);
  const [stage, setStage] = useState<Stage>(STAGES.SPARK);
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
        <div>2</div>
      </div>
    </section>
  );
}
