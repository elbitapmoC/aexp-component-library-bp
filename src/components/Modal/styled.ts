import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --modal-light-bg: #fff;
    --modal-dark-bg: #1a1a1a;
    --modal-light-color: #000;
    --modal-dark-color: #fff;
    --modal-backdrop: rgba(126, 126, 126, 0.5);

    /* Button Variables */
    --button-border-radius: 4px;
    --button-padding: 0.5rem 1rem;
    --button-font-size: 1rem;

    /* Focus and Outline */
    --focus-outline-color: #007bff;
    --focus-outline-width: 2px;
    font-family: Arial, Helvetica, sans-serif;
  }

  dialog::backdrop {
    background: var(--modal-backdrop);
    backdrop-filter: blur(1.5px);
    -webkit-backdrop-filter: blur(1.5px);
  }

  dialog {
    border-radius: 0.25rem;
  }
`;

const lightTheme = css`
  background-color: var(--modal-light-bg);
  color: var(--modal-light-color);
`;

const darkTheme = css`
  background-color: var(--modal-dark-bg);
  color: var(--modal-dark-color);
`;

export const ModalWrapper = styled.dialog<{
  variant: "light" | "dark";
  size: string;
}>`
  ${({ variant }) => (variant === "light" ? lightTheme : darkTheme)};
  ${({ size }) =>
    size === "small"
      ? "width: 300px;"
      : size === "medium"
        ? "width: 500px;"
        : "width: 800px;"};
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 0.5rem;

  h2 {
    margin: 0;
    font-size: 2rem;
  }
`;

export const ModalBody = styled.main`
  margin: 1rem 0;
  font-size: 1rem;
  line-height: 1.5;
`;

export const ModalFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const Button = styled.button`
  border: none;
  border-radius: var(--button-border-radius);
  padding: var(--button-padding);
  font-size: var(--button-font-size);
  cursor: pointer;
  background-color: #007bff;
  color: white;

  &:focus {
    outline: var(--focus-outline-width) solid var(--focus-outline-color);
    outline-offset: 2px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
