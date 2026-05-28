import styles from "../../page.module.css";

export default function SectionTwo() {
  return (
    <section className={`${styles.SectionTwo} section-container`}>
      <div>
        <p>
          Every day, a secret battle is being fought unbeknownst to most people.
          Evil <strong>BUGS</strong> seek to corrupt society&apos;s websites,
          databases, and servers. Stands against them are humans who use the{" "}
          <strong>Power of Code</strong> to safeguard our technologies and
          securities. They are, the{" "}
          <span className={styles.colorGradient}>King of Coders.</span>
        </p>
      </div>
    </section>
  );
}
