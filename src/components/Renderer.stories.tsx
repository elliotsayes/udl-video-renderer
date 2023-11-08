import type { Meta, StoryObj } from "@storybook/react";

import { Renderer } from "./Renderer";
import { Providers } from "./provider/Providers";

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
  render: (args) => (
    <Providers>
      <Renderer {...args} />
    </Providers>
  ),
} satisfies Meta<typeof Renderer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LicensedImage: Story = {
  args: {
    renderTxId: "Tzthl3xaI4K4cUYBIQ13O7AhuAc3F57y5R86ns2Yq4o"
  },
};

export const NoContractImage: Story = {
  args: {
    renderTxId: "ynve-5sftS5fUp_UZw39bKuDjIybsm7AsWsBILey9iU"
  },
};

export const NoContractVideo: Story = {
  args: {
    renderTxId: "Ff6hyvaICMBnYyADpZLkvDj69LzraxR2XWl5BdOlvHI"
  },
};

export const UnlicensedVideo: Story = {
  args: {
    renderTxId: "sm_box65Fd_xt9DedeP_IMYOXAi-RfWuztEGjfSOdlw"
  },
};
