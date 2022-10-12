import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./index";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Send",
  },
  argTypes: {   
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
