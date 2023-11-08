import type { Meta, StoryObj } from "@storybook/react";

import { ErrorContent } from "./ErrorContent";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "App/ErrorContent",
  component: ErrorContent,
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
      <ErrorContent {...args} >
        <p>Test Text</p>
      </ErrorContent>
    </div>
  ),
} satisfies Meta<typeof ErrorContent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
  },
};
