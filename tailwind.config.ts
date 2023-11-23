import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSizes: {},
    extend: {
      colors: {
        primaryButtonColor: "#32bb78",
        SecondaryButtonColor: "#1d965c",
        primaryBackgroundColor: "#fff",
        secondaryBackgroundColor: "#fff",
        surfaceColor: "rgba(6,26,55,.039)",
        showdowColor: "#fff",
        primaryTextColor: "#2f313f",
        secondaryTextColor: "rgba(18,29,43,.6)",
        tertaryTextColor: "rgba(6,26,55,.361)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif", ...defaultTheme.fontFamily.sans],
      },

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
export default config;
