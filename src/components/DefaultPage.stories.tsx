import type { Meta, StoryObj } from "@storybook/react";

import { DefaultPage } from "./DefaultPage";
import { Providers } from "./provider/Providers";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "App/DefaultPage",
  component: DefaultPage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
  args: {
    children: undefined,
  },
  render: () => (
    <Providers>
      <DefaultPage />
    </Providers>
  ),
} satisfies Meta<typeof DefaultPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
  },
};
