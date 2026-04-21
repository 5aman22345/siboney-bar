import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50:  "#FAF8F3",
          100: "#F5F0E8",
          200: "#EDE3D3",
          300: "#DFD0BB",
        },
        olive: {
          500: "#4A6B4B",
          600: "#3A5A3B",
          700: "#2D4A2E",
          800: "#1E3320",
          900: "#122014",
        },
        terra: {
          300: "#F0A878",
          400: "#E8935A",
          500: "#D4784A",
          600: "#C4622D",
        },
        ink: {
          DEFAULT: "#2C2C2C",
          light: "#4A4A4A",
          muted: "#767676",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
