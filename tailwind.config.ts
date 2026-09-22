import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-raised": "var(--bg-raised)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-faint": "var(--ink-faint)",
        line: "var(--line)",
        accent: "var(--accent)",
        "accent-ink": "var(--accent-ink)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
      },
      maxWidth: {
        page: "1440px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-50%)" },
        },
        "grain-shift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-1%, -2%)" },
          "30%": { transform: "translate(1%, 2%)" },
          "50%": { transform: "translate(-2%, 1%)" },
          "70%": { transform: "translate(2%, -1%)" },
          "90%": { transform: "translate(-1%, 2%)" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        "marquee-vertical": "marquee-vertical 30s linear infinite",
        grain: "grain-shift 1.2s steps(4) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
