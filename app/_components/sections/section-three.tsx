"use client";

import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";

import styles from "@/app/page.module.css";
import RadarChart from "@/components/chart/radar-chart";
import SectionHeader from "../../../components/section-header";

const LABELS = ["Python / Django", "Databases", "AI / Cursor", "PHP", "JS/Vue"];
const INITIAL_DATA = [0, 0, 0, 0, 0];
const FINAL_DATA = [7, 5, 4, 6, 9];
const HEADER_FINAL = "CHOOSE YOUR CODER";

export default function SectionThree() {
  const [isUpdateChart, setIsUpdateChart] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleHeaderTriggered = useCallback(() => {
    setIsUpdateChart(true);
  }, []);

  const radarDataset = useMemo(
    () => [
      {
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        borderColor: "#FC2525",
        pointBackgroundColor: "white",
        data: isUpdateChart ? FINAL_DATA : INITIAL_DATA,
      },
    ],
    [isUpdateChart],
  );

  return (
    <section
      id="section-three"
      className={`section-container ${styles.sectionThree}`}
    >
      <SectionHeader
        sectionId="section-three"
        text={HEADER_FINAL}
        onTriggered={handleHeaderTriggered}
      />

      <div className={styles.sectionThreeContent}>
        <div className={styles.characterBioContainer}>
          <div
            className={styles.imgBorder}
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
          >
            <Image
              src={isMouseOver ? "/images/dino-2.png" : "/images/dino-1.png"}
              alt="House banner"
              width={200}
              height={200}
              priority={false}
            />
          </div>
          <span className={styles.primaryColor}>Anh</span> of house{" "}
          <span className={styles.primaryColor}>Le</span>, first of his name,
          maester of nap and watcher of sports, cleaner of code, user of Google
          searches, browser of youtube.
          <p>
            <span className={styles.primaryColor}>
              House banner: The mouse{" "}
            </span>
            <FontAwesomeIcon
              icon={faMousePointer}
              className="inline-block"
              style={{ width: 20, height: 20 }}
            />
          </p>
          <p>
            <span className={styles.primaryColor}>House word:</span> deadlines
            are coming
          </p>
        </div>

        <RadarChart
          labels={LABELS}
          datasets={radarDataset}
          update={isUpdateChart}
        />
      </div>
    </section>
  );
}
