import Image from "next/image";
import BannerImage from "../public/images/king-of-coder.png";
import styles from "./page.module.css";

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
