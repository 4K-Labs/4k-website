import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#AA7F54",
        "primary-bg": "#D2D2D2",
        "secondary-bg": "#F6F6F6",
        "txt-color": "#111111",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "custom-md": "900px",
        "custom-lg": "1200px", 
      },
    },
    fontFamily: {
      custom: ["Roboto", "sans-serif"],
    },
  },
});

export default config;
