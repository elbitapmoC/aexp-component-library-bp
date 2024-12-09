import type { Meta, StoryObj } from "@storybook/react";
import Scenario from ".";

const meta: Meta<typeof Scenario> = {
  title: "Components/Scenario",
  component: Scenario,
  argTypes: {
    title: { control: "text" },
    variant: { control: "radio", options: ["light", "dark"] },
    size: { control: "radio", options: ["small", "medium", "large"] },
    disableBackdropClick: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Scenario>;

export const Default: Story = {
  args: {
    title: "Default Scenario",
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
    title: "Dark Large Scenario",
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
    title: "Small Scenario",
    children: <p>Backdrop click is disabled for this scenario(modal).</p>,
    variant: "light",
    size: "small",
    disableBackdropClick: true,
  },
};
