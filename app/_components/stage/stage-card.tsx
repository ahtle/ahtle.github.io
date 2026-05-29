import Image, { type StaticImageData } from "next/image";

import styles from "./stage.module.css";

type StageCardProps = {
  colorImage: StaticImageData;
  bwImage: StaticImageData;
  isSelected: boolean;
  alt: string;
  onSelect: () => void;
};

export default function StageCard({
  colorImage,
  bwImage,
  isSelected,
  alt,
  onSelect,
}: StageCardProps) {
  return (
    <div className={styles.stageImageContainer} onClick={onSelect}>
      <Image
        src={isSelected ? colorImage : bwImage}
        alt={alt}
        fill
        sizes="300px"
      />
    </div>
  );
}
