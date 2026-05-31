import Image from "next/image";

import styles from "@/app/page.module.css";
import FightImage from "@/public/images/fight.png";

export default function SectionFive() {
  return (
    <section id="section-five" className={styles.sectionFive}>
      <Image
        src={FightImage}
        alt="Fight scene"
        className={styles.sectionFiveImage}
        sizes="100vw"
      />
    </section>
  );
}
