import type { StaticImageData } from "next/image";

import StageCard from "./stage-card";
import styles from "./stage.module.css";

export interface StageListItem<GID extends string = string> {
  id: GID;
  colorImage: StaticImageData;
  bwImage: StaticImageData;
  alt: string;
}

interface StageListProps<GID extends string> {
  items: StageListItem<GID>[];
  selectedId: GID;
  onSelect: (id: GID) => void;
}

export default function StageList<GID extends string>({
  items,
  selectedId,
  onSelect,
}: StageListProps<GID>) {
  return (
    <div className={styles.stageList}>
      {items.map((item) => (
        <StageCard
          key={item.id}
          colorImage={item.colorImage}
          bwImage={item.bwImage}
          isSelected={selectedId === item.id}
          alt={item.alt}
          onSelect={() => onSelect(item.id)}
        />
      ))}
    </div>
  );
}
