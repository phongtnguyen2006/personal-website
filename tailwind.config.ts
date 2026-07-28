import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#14131A",
          raised: "#1B1A23",
          rule: "#2A2833",
        },
        paper: {
          DEFAULT: "#EDE8DE",
          dim: "#A29CAC",
          faint: "#6E6879",
        },
        amber: "#F0A868",
        plum: "#8A7A9B",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        gloss: "0.14em",
      },
      maxWidth: {
        measure: "62ch",
      },
    },
  },
  plugins: [],
} satisfies Config;
