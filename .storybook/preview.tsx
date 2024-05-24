import React from "react";
import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Dark or Light mode",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark", "both"],
        dynamicTitle: true,
      },
    },
  },

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { theme } = context.globals;

      if (theme === "light") {
        return <Story />;
      } else if (theme === "dark") {
        <div className={"dark-theme"} style={{ padding: "0.5rem" }}>
          <Story />
        </div>;
      }

      return (
        <div>
          <Story />

          <div className={"dark-theme"} style={{ padding: "0.5rem" }}>
            <Story />
          </div>
        </div>
      );
    },
  ],
};

export default preview;
