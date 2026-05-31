import styles from "@/app/page.module.css";

export interface StageDetail {
  name: string;
  period: string;
  role: string;
  description: string;
}

interface StageDisplayProps {
  detail: StageDetail;
}

export default function StageDisplay({ detail }: StageDisplayProps) {
  return (
    <div className={styles.stageDisplay}>
      <h4 className={styles.stageName}>{detail.name}</h4>
      <p className={styles.stagePeriod}>{detail.period}</p>
      <p className={styles.stageDescription}>
        <span className={styles.primaryColor}>{detail.role}</span>{" "}
        {detail.description}
      </p>
    </div>
  );
}
