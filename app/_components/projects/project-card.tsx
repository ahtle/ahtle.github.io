"use client";

import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faLaravel,
  faReact,
  faVuejs,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import {
  ADDITIONAL_SKILL_IMAGES,
  type Project,
} from "@/app/_components/projects/project-constants";
import styles from "@/app/_components/projects/project.module.css";

interface ProjectCardProps {
  project: Project;
  onShowError: () => void;
  onShowImages: () => void;
}

const SKILL_ICON_CLASS: Record<string, string> = {
  react: styles.toolIconReact,
  vuejs: styles.toolIconVuejs,
  laravel: styles.toolIconLaravel,
  wordpress: styles.toolIconWordpress,
  database: styles.toolIconDatabase,
};

const SKILL_ICONS = {
  react: faReact,
  vuejs: faVuejs,
  laravel: faLaravel,
  wordpress: faWordpress,
  database: faDatabase,
} as const;

function NavLink({
  label,
  firstLetter,
  href,
  isDisabled,
  onShowError,
}: {
  label: string;
  firstLetter: string;
  href?: string;
  isDisabled: boolean;
  onShowError: () => void;
}) {
  const rest = label.slice(1);

  if (isDisabled) {
    return (
      <li className={styles.showErrorModal} onClick={onShowError}>
        <span className={styles.colorRed}>{firstLetter}</span>
        {rest}
      </li>
    );
  }

  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <span className={styles.colorRed}>{firstLetter}</span>
        {rest}
      </a>
    </li>
  );
}

export default function ProjectCard({
  project,
  onShowError,
  onShowImages,
}: ProjectCardProps) {
  const { status, title, description, skills, additionalSkills, github, site, images } =
    project;

  return (
    <div className={styles.projectBox}>
      <ul className={styles.projectNav}>
        <NavLink
          label="github"
          firstLetter="g"
          href={github}
          isDisabled={!github}
          onShowError={onShowError}
        />
        <NavLink
          label="site"
          firstLetter="s"
          href={site}
          isDisabled={!site}
          onShowError={onShowError}
        />
        {images ? (
          <li onClick={onShowImages}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                onShowImages();
              }}
            >
              <span className={styles.colorRed}>g</span>raphics
            </a>
          </li>
        ) : (
          <li className={styles.showErrorModal} onClick={onShowError}>
            <span className={styles.colorRed}>g</span>raphics
          </li>
        )}
      </ul>

      <p className={styles.status}>{status}</p>
      <p className={styles.title}>{title}</p>
      <div className={styles.description}>{description}</div>

      <div className={styles.tools}>
        <span>Tools: </span>
        {skills.map((skill) => {
          const icon = SKILL_ICONS[skill as keyof typeof SKILL_ICONS];
          if (!icon) return null;

          return (
            <FontAwesomeIcon
              key={skill}
              icon={icon}
              className={`${styles.toolIcon} ${SKILL_ICON_CLASS[skill] ?? ""}`}
              style={{ width: 24, height: 24 }}
            />
          );
        })}
        {additionalSkills?.map((skill) => {
          const image = ADDITIONAL_SKILL_IMAGES[skill];
          if (!image) return null;

          return (
            <Image
              key={skill}
              src={image}
              alt={skill}
              className={styles.additionalSkill}
              height={24}
              width={Math.round((image.width / image.height) * 24)}
              style={{ height: 24, width: "auto" }}
            />
          );
        })}
      </div>
    </div>
  );
}
