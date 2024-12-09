import type { Meta, StoryObj } from "@storybook/react";
import Modal from ".";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    title: { control: "text" },
    variant: { control: "radio", options: ["light", "dark"] },
    size: { control: "radio", options: ["small", "medium", "large"] },
    disableBackdropClick: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    title: "Default Modal",
    children: (
      <p>
        This is a light scenario(modal) with medium size. Customize as needed!
      </p>
    ),
    variant: "light",
    size: "medium",
    disableBackdropClick: false,
  },
};

export const DarkLarge: Story = {
  args: {
    title: "Dark Large Modal",
    children: (
      <p>
        This is a dark scenario(modal) with large size. Customize as needed!
      </p>
    ),
    variant: "dark",
    size: "large",
    disableBackdropClick: false,
  },
};

export const SmallNoBackdropClick: Story = {
  args: {
    title: "Small Modal",
    children: <p>Backdrop click is disabled for this scenario(modal).</p>,
    variant: "light",
    size: "small",
    disableBackdropClick: true,
  },
};
