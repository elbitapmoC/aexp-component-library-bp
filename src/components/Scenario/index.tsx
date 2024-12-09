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
  // Reference to the <dialog> element
  const dialogRef = useRef<HTMLDialogElement>(null);

  // State to manage open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Effect to handle Escape key and fixing the body overflow (preventing scroll)
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeScenario();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  // Open dialog/modal
  const openScenario = () => {
    dialogRef.current?.showModal();
    setIsOpen(true);
  };

  // Close dialog/modal
  const closeScenario = () => {
    dialogRef.current?.close();
    setIsOpen(false);
  };

  // Handle click outside the dialog(background)
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
        aria-labelledby="scenario-title"
        {...rest}
      >
        <ScenarioHeader>
          <h2 id="scenario-title">{title}</h2>
        </ScenarioHeader>
        <ScenarioBody>{children}</ScenarioBody>
        <ScenarioFooter>
          <Button onClick={closeScenario}>Close scenario</Button>
        </ScenarioFooter>
      </ScenarioWrapper>
      <Button onClick={openScenario} aria-label="Open Scenario">
        Open Scenario
      </Button>
    </>
  );
};

export default Scenario;
