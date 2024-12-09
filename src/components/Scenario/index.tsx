import { useEffect, useRef, useState } from "react";
import {
  Button,
  GlobalStyles,
  ScenarioBody,
  ScenarioFooter,
  ScenarioHeader,
  ScenarioWrapper,
} from "./styled";
import type { ScenarioProps } from "./types";

const Scenario = ({
  title,
  children,
  variant = "light",
  size = "medium",
  disableBackdropClick = false,
  ...rest
}: ScenarioProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeScenario();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "";
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
      <GlobalStyles />
      <ScenarioWrapper
        ref={dialogRef}
        variant={variant}
        size={size}
        onClick={handleBackdropClick}
        {...rest}
      >
        <ScenarioHeader>
          <h2>{title}</h2>
        </ScenarioHeader>
        <ScenarioBody>{children}</ScenarioBody>
        <ScenarioFooter>
          <Button onClick={closeScenario}>Close scenario</Button>
        </ScenarioFooter>
      </ScenarioWrapper>
      <Button onClick={openScenario}>Open Scenario</Button>
    </>
  );
};

export default Scenario;
