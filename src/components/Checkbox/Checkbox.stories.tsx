import { Meta, StoryObj } from "@storybook/react";
import Text from "../Text";
import Checkbox, { CheckboxProps } from "./index";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Forgot your password?</Text>
        </div>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
