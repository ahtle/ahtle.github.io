"use client";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";

import type { ProjectImage } from "@/app/_components/projects/project-constants";
import "@/app/_components/projects/project-lightbox.css";
import {
  captionToText,
  resolveImageSrc,
} from "@/app/_components/projects/project-image";

interface ProjectLightboxProps {
  images: ProjectImage[];
  open: boolean;
  onClose: () => void;
}

export default function ProjectLightbox({
  images,
  open,
  onClose,
}: ProjectLightboxProps) {
  const slides = images.map((image) => ({
    src: resolveImageSrc(image.src),
    title: captionToText(image.caption),
  }));

  return (
    <Lightbox
      open={open}
      close={onClose}
      slides={slides}
      plugins={[Captions, Counter]}
      captions={{
        descriptionTextAlign: "center",
      }}
    />
  );
}
