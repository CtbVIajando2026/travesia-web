import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      colors: {
        forest: {
          dark: "#0a1a0a",
          DEFAULT: "#1a2f1a",
          mid: "#2D4A2D",
        },
        moss: "#5a8a5a",
        gold: {
          dark: "#7F5C14", // dorado para texto sobre fondos claros (contraste AA)
          pale: "#e8c96e",
          light: "#d4ad5a",
          DEFAULT: "#C5993A",
        },
        cream: {
          pale: "#faf7f0",
          warm: "#fdf0da",
          DEFAULT: "#F5EFE0",
        },
        beige: "#E8DCC8",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
