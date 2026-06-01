"use client";

import { useCallback, useEffect, useState } from "react";

import { CONTACT_LINKS } from "@/app/_components/contacts/contact-constants";
import styles from "@/app/_components/contacts/contacts.module.css";

function ContactsModal({ onClose }: { onClose: () => void }) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className={styles.modalMask} onClick={onClose} role="presentation">
      <div
        className={styles.modalContainer}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-labelledby="contacts-modal-heading"
        aria-modal="true"
      >
        <div className={styles.modalHeading} id="contacts-modal-heading">
          Contacts!
        </div>
        <div className={styles.modalBody}>
          <ul className={styles.modalList}>
            <li>
              <a
                className={styles.modalLink}
                href={CONTACT_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                className={styles.modalLink}
                href={CONTACT_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className={styles.modalLink}
                href={CONTACT_LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                className={styles.modalLink}
                href={`mailto:${CONTACT_LINKS.email}`}
              >
                Email: {CONTACT_LINKS.email}
              </a>
            </li>
            <li>
              <a
                className={styles.modalLink}
                href={`tel:+1${CONTACT_LINKS.phone.replace(/\D/g, "")}`}
              >
                Phone: {CONTACT_LINKS.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ContactsWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={styles.contactsButton}
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        Contacts
      </button>

      {isOpen && <ContactsModal onClose={() => setIsOpen(false)} />}
    </>
  );
}
