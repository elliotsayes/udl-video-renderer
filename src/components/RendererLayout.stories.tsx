import type { Meta, StoryObj } from "@storybook/react";

import { RendererLayout } from "./RendererLayout";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "App/RendererLayout",
  component: RendererLayout,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  render: () => (
    <RendererLayout>
      <div className="flex flex-col flex-grow-0 justify-center text-center">
        Test Content
      </div>
    </RendererLayout>
  ),
} satisfies Meta<typeof RendererLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: null,
  },
};
