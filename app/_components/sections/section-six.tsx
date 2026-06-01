"use client";

import { useState } from "react";

import ErrorModal from "@/app/_components/projects/error-modal";
import ProjectCard from "@/app/_components/projects/project-card";
import { type ProjectImage } from "@/app/_components/projects/project-constants";
import ProjectLightbox from "@/app/_components/projects/project-lightbox";
import styles from "@/app/page.module.css";
import { useGetProject } from "@/hooks/use-get-projects";

import SectionHeader from "../section-header";

export default function SectionSix() {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<ProjectImage[] | null>(
    null,
  );
  const { projects } = useGetProject();

  return (
    <section
      id="section-six"
      className={`${styles.sectionSix} section-container`}
    >
      <SectionHeader sectionId="section-six" text="PROJECTS" />

      <p className="mb-16 text-3xl text-white">
        Professional and personal Projects
      </p>

      <div className={styles.projectContainer}>
        {projects.map((project) => (
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
