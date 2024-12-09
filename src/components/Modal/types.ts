import type { ComponentProps, ReactNode } from "react";

export type ModalProps = ComponentProps<"dialog"> & {
  title: string;
  children: ReactNode;
  variant?: "light" | "dark";
  size?: "small" | "medium" | "large";
  disableBackdropClick?: boolean;
};
