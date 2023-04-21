/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Figtree", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "cadet-blue": {
          50: "#cde3e5",
          100: "#abd5d8",
          200: "#89c6ca",
          300: "#78bfc3",
          400: "#4ab5ba",
          500: "#45a8ae",
          600: "#3e9398",
          700: "#377e81",
          800: "#2f6d70",
          900: "#265c5e",
        },
        "brown-sugar": {
          50: "hsl(14, 70%, 98%)",
          100: "hsl(14, 70%, 98%)",
          200: "hsl(14, 70%, 78%)",
          300: "hsl(14, 70%, 68%)",
          400: "hsl(14, 70%, 58%)",
          500: "hsl(14, 70%, 48%)",
          600: "hsl(14, 70%, 43%)",
          700: "hsl(14, 70%, 38%)",
          800: "hsl(14, 70%, 33%)",
          900: "hsl(14, 70%, 28%)",
        },
        "golden-rod": {
          50: "#F9E9D9",
          100: "#F5D9B8",
          200: "#F1C996",
          300: "#EDB974",
          400: "#E9A952",
          500: "#E69A41",
          600: "#E28B30",
          700: "#DE7C1F",
          800: "#DA6D0E",
          900: "#D65E00",
        },
        burgundy: {
          50: "#fcf1f3",
          100: "#fad5dc",
          200: "#f5aab9",
          300: "#ef7f93",
          400: "#e95b75",
          500: "#d9455d",
          600: "#b93a4b",
          700: "#95303b",
          800: "#722631",
          900: "#4d1f23",
        },
        "eerie-black": {
          50: "#aaaaaa",
          100: "#9a9a9a",
          200: "#8a8a8a",
          300: "#7a7a7a",
          400: "#6a6a6a",
          500: "#5a5a5a",
          600: "#4a4a4a",
          700: "#3a3a3a",
          800: "#2a2a2a",
          900: "#1a1a1a",
        },
      },

      dropShadow: {
        "neg-xl": [
          "0 -20px -13px rgba(0, 0, 0, 0.03)",
          "0 -8px -5px rgba(0, 0, 0, 0.08)",
        ],
      },
      padding: {
        "p-18": "4.5rem",
        "-p-16": "-4rem",
      },
      margin: { "-m-16": "-4rem" },
    },
  },
  daisyui: {
    themes: [
      {
        gkdark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#78bfc3",
          accent: "#8B3A24",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
