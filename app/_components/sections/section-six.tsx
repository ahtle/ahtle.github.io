"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import ErrorModal from "@/app/_components/projects/error-modal";
import ProjectCard from "@/app/_components/projects/project-card";
import {
  PROJECTS,
  type ProjectImage,
} from "@/app/_components/projects/project-constants";
import ProjectLightbox from "@/app/_components/projects/project-lightbox";
import styles from "@/app/page.module.css";
import { useDecodeText } from "@/hooks/use-decode-text";

export default function SectionSix() {
  const { text: header, startDecode } = useDecodeText("PROJECTS");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<ProjectImage[] | null>(
    null,
  );
  const hasTriggeredRef = useRef(false);

  const triggerSection = useCallback(() => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    startDecode();
  }, [startDecode]);

  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById("section-six");
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
      id="section-six"
      className={`${styles.sectionSix} section-container`}
    >
      <h3 className="section-header mb-2">{header}</h3>
      <p className="mb-16 text-3xl text-white">
        Professional and personal Projects
      </p>

      <div className={styles.projectContainer}>
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onShowError={() => setShowErrorModal(true)}
            onShowImages={() => {
              if (project.images) {
                setLightboxImages(project.images);
              }
            }}
          />
        ))}
      </div>

      {showErrorModal && (
        <ErrorModal onClose={() => setShowErrorModal(false)} />
      )}

      {lightboxImages && (
        <ProjectLightbox
          images={lightboxImages}
          open={lightboxImages !== null}
          onClose={() => setLightboxImages(null)}
        />
      )}
    </section>
  );
}
