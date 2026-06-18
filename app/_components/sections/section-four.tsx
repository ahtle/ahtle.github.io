"use client";

import { useState } from "react";

import styles from "@/app/page.module.css";
import {
  STAGE_DETAILS,
  STAGE_ENUMS,
  STAGE_ITEMS,
  type Stage,
} from "@/app/_components/stage/stage-constants";
import StageDisplay from "@/app/_components/stage/stage-display";
import StageList from "@/app/_components/stage/stage-list";
import SectionHeader from "../../../components/section-header";

const HEADER_FINAL = "CHOOSE YOUR STAGE";

export default function SectionFour() {
  const [stage, setStage] = useState<Stage>(STAGE_ENUMS.SPARK);

  return (
    <section
      id="section-four"
      className={`${styles.sectionFour} section-container`}
    >
      <SectionHeader sectionId="section-four" text={HEADER_FINAL} />
      <div className="grid gap-4 md:grid-cols-2 md:gap-8">
        <StageList items={STAGE_ITEMS} selectedId={stage} onSelect={setStage} />
        <StageDisplay detail={STAGE_DETAILS[stage]} />
      </div>
    </section>
  );
}
