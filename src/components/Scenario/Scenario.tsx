import type { ComponentProps, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import styles from './Scenario.module.css';

// & - extends type to include all the default attributes of an HTML <dialog> element.
export type ScenarioProps = ComponentProps<'dialog'> & {
  title: string;
  children: ReactNode; // Content to be displayed inside the dialog
  variant?: 'light' | 'dark';
  size?: 'small' | 'medium' | 'large';
  disableBackdropClick?: boolean;
};

const Scenario = ({
  title,
  children,
  variant = 'light',
  size = 'medium',
  disableBackdropClick = false,
  ...rest
}: ScenarioProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // User can close modal/scenario by pressing escape as well
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeScenario();
      }
    };

    if (isOpen) {
      // Prevent background scrolling when the dialog is open (got this idea from ShadCDN)
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      // Clean up when the component unmounts or dialog closes.
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]); // When `isOpen` changes, ensure effects are ran.

  const openScenario = () => {
    dialogRef.current?.showModal();
    setIsOpen(true);
  };

  // Closes the dialog and sets `isOpen` to false, re-rendering component.
  // Good for testing.
  const closeScenario = () => {
    dialogRef.current?.close();
    setIsOpen(false);
  };

  // Determines if user can close modal from clicking on the backdrop or not.
  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current && !disableBackdropClick) {
      closeScenario();
    }
  };

  return (
    <>
      <dialog
        ref={dialogRef}
        data-testid="dialog" // For testing
        aria-labelledby="scenario-title"
        className={`${styles.scenario} ${styles[`scenario--${variant}`]} ${styles[`scenario--${size}`]}`}
        onClick={handleBackdropClick}
        // Pass in any additional props to the dialog
        {...rest}
      >
        <article className={styles.scenario__dialog}>
          <header className={styles.scenario__header}>
            <h2 id="scenario-title">{title}</h2>
          </header>
          <main className={styles.scenario__body}>{children}</main>
          <footer className={styles.scenario__footer}>
            <button
              type="button"
              onClick={closeScenario}
              aria-label="Close scenario"
              className={styles.scenario__actionButton}
            >
              Close
            </button>
          </footer>
        </article>
      </dialog>

      <button type="button" onClick={openScenario} className={styles.scenario__openButton}>
        Open Scenario
      </button>
    </>
  );
};

export default Scenario;
