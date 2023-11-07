import type { Meta, StoryObj } from "@storybook/react";

import { LoadingContent } from "./LoadingContent";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "App/LoadingContent",
  component: LoadingContent,
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
  render: (args) => (
    <div className="h-[100%]">
      <LoadingContent {...args} >
        <p>Test Text</p>
      </LoadingContent>
    </div>
  ),
} satisfies Meta<typeof LoadingContent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
  },
};
