import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";

import Signin from "./index";

export default {
  title: "Views/Signin",
  component: Signin,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/auth", (request, response, context) => {
          return response(
            context.json({
              message: "Login Realizado!",
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("Digite seu e-mail"),
      "test@test.com"
    );
    userEvent.type(canvas.getByPlaceholderText("******"), "test123");

    userEvent.click(canvas.getByRole("button"));

    await waitFor(() =>
      expect(canvas.getByText("Login realizado!")).toBeInTheDocument()
    );
  },
};
