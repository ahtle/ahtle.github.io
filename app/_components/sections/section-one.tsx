import Image from "next/image";

import styles from "@/app/page.module.css";
import BannerImage from "@/public/images/king-of-coder.png";

export default function SectionOne() {
  return (
    <section id="section-one" className={styles.sectionOne}>
      <Image
        src={BannerImage}
        alt="Hero image. King of coder."
        width={0}
        height={0}
        className="h-auto w-[300px] md:w-[800px]"
        loading="eager"
      />
    </section>
  );
}
