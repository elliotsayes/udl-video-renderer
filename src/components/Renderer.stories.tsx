import type { Meta, StoryObj } from "@storybook/react";

import { Renderer } from "./Renderer";
import { Providers } from "./Providers";
import { RenderTxLoader } from "./RenderTxLoader";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "App/Renderer",
  component: Renderer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  render: () => (
    <Providers>
      <RenderTxLoader>
        <Renderer />
      </RenderTxLoader>
    </Providers>
  ),
} satisfies Meta<typeof Renderer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
  },
};
