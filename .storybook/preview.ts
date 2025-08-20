import React from "react";
import type { Preview } from "@storybook/react-webpack5";
import type { StoryFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/theme";

const withTheme = (Story: StoryFn, context: any): React.ReactElement => {
  return React.createElement(ThemeProvider, { theme }, React.createElement(Story, { ...context }));
};

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
  decorators: [withTheme],
};

export default preview;
