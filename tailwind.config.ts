import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#07080F",
        elev: "#0D0F1A",
        fg: "#EAECF5",
        muted: "#8A90A6",
        faint: "#565C72",
        line: "#1C2030",
        mint: "#34E7B0",
        "mint-deep": "#12B98A",
        violet: "#7A5CFF",
        blue: "#3C82F9",
        cyan: "#3BE0F0",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(52,231,176,0.5)",
        "glow-violet": "0 0 60px -12px rgba(122,92,255,0.55)",
      },
      keyframes: {
        drift1: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(8%,6%) scale(1.15)" },
        },
        drift2: {
          "0%,100%": { transform: "translate(0,0) scale(1.1)" },
          "50%": { transform: "translate(-10%,-8%) scale(0.95)" },
        },
        drift3: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(6%,-10%) scale(1.2)" },
        },
      },
      animation: {
        drift1: "drift1 18s ease-in-out infinite",
        drift2: "drift2 22s ease-in-out infinite",
        drift3: "drift3 26s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
