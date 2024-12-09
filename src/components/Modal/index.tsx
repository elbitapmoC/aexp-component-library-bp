import { useEffect, useRef, useState } from "react";
import {
  Button,
  GlobalStyles,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalWrapper,
} from "./styled";
import type { ModalProps } from "./types";

const Modal = ({
  title,
  children,
  variant = "light",
  size = "medium",
  disableBackdropClick = false,
  ...rest
}: ModalProps) => {
  // Reference to the <dialog> element
  const dialogRef = useRef<HTMLDialogElement>(null);

  // State to manage open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Effect to handle Escape key and fixing the body overflow (preventing scroll)
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
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
  const openModal = () => {
    dialogRef.current?.showModal();
    setIsOpen(true);
  };

  // Close dialog/modal
  const closeModal = () => {
    dialogRef.current?.close();
    setIsOpen(false);
  };

  // Handle click outside the dialog(background)
  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current && !disableBackdropClick) {
      closeModal();
    }
  };

  return (
    <>
      <GlobalStyles />
      <ModalWrapper
        ref={dialogRef}
        variant={variant}
        size={size}
        onClick={handleBackdropClick}
        aria-labelledby="modal-title"
        {...rest}
      >
        <ModalHeader>
          <h2 id="modal-title">{title}</h2>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button onClick={closeModal}>Close modal</Button>
        </ModalFooter>
      </ModalWrapper>
      <Button onClick={openModal} aria-label="Open Modal">
        Open Modal
      </Button>
    </>
  );
};

export default Modal;
