import type { ComponentProps, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import styles from './Scenario.module.css';

export type ScenarioProps = ComponentProps<'dialog'> & {
  title: string;
  children: ReactNode;
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

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeScenario();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const openScenario = () => {
    dialogRef.current?.showModal();
    setIsOpen(true);
  };

  const closeScenario = () => {
    dialogRef.current?.close();
    setIsOpen(false);
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current && !disableBackdropClick) {
      closeScenario();
    }
  };

  return (
    <>
      <dialog
        ref={dialogRef}
        data-testid="dialog"
        aria-labelledby="scenario-title"
        className={`${styles.scenario} ${styles[`scenario--${variant}`]} ${styles[`scenario--${size}`]}`}
        onClick={handleBackdropClick}
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
