import styles from "@/app/_components/projects/project.module.css";

interface ErrorModalProps {
  onClose: () => void;
}

export default function ErrorModal({ onClose }: ErrorModalProps) {
  return (
    <div
      className={styles.modalMask}
      onClick={onClose}
      onKeyDown={(event) => {
        if (event.key === "Escape") onClose();
      }}
      role="presentation"
    >
      <div
        className={styles.modalContainer}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-labelledby="error-modal-heading"
        aria-modal="true"
      >
        <div className={styles.errorHeading} id="error-modal-heading">
          Error!
        </div>
        <div className={styles.errorBody}>
          <p>private</p>
        </div>
      </div>
    </div>
  );
}
