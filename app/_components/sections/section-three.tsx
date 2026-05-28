"use client";

import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useDecodeText } from "@/app/_hooks/use-decode-text";
import RadarChart from "../chart/radar-chart";
import styles from "../../page.module.css";

const LABELS = ["Python / Django", "Databases", "AI / Cursor", "PHP", "JS/Vue"];
const INITIAL_DATA = [0, 0, 0, 0, 0];
const FINAL_DATA = [7, 5, 4, 6, 9];
const HEADER_FINAL = "CHOOSE YOUR CODER";

export default function SectionThree() {
  const { text: header, startDecode } = useDecodeText(HEADER_FINAL);
  const [isUpdateChart, setIsUpdateChart] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const hasTriggeredRef = useRef(false);

  const triggerSection = useCallback(() => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    startDecode();
    setIsUpdateChart(true);
  }, [startDecode]);

  useEffect(() => {
    const onScroll = (): void => {
      const element = document.getElementById("section-three");
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
      <h3 className="section-header">{header}</h3>

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
            <span className={styles.primaryColor}>House banner:</span> The mouse{" "}
            <FontAwesomeIcon icon={faMousePointer} className="text-[1.25rem]" />
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
