
import type { Config } from 'tailwindcss';

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
        'primary': '#EBEBEB',
        'secondary': '#F6F6F6',
        'primaryColor': '#AA7f54',
        'secondaryColor': '#D2D2D2',
        footer: "#676767",
        brown: "#8D5F3C",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'custom-md': '900px', // Custom breakpoint
        'custom-lg': '1200px', // Another custom breakpoint
        // Add more custom breakpoints as needed
      }
    },
    fontFamily: {
      custom: ["Roboto", "sans-serif"]
    }
  },
  plugins: [],


})

export default config