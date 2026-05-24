import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        "bg": "#F6F3EE",
        "surface": "#FFFFFF",
        "sidebar": "#18211E",

        // Semantic accents — three colors, three meanings
        "ember": "#C1622F",        // Action only
        "slate-ai": "#5C7A9B",     // AI / Intelligence only
        "moss": "#4E7C6B",         // Completion / Growth only

        // Text
        "ink": "#1E1E1C",
        "ink-2": "#6B6B68",
        "ink-3": "#A8A8A5",

        // Structural
        "divider": "rgba(30, 30, 28, 0.12)",
        "card-border": "rgba(30, 30, 28, 0.08)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        ui: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(30, 30, 28, 0.06), 0 1px 2px rgba(30, 30, 28, 0.04)",
        raised: "0 4px 16px rgba(30, 30, 28, 0.08)",
        input: "0 1px 2px rgba(30, 30, 28, 0.05)",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        md: "8px",
        lg: "12px",
      },
      spacing: {
        "card": "28px",
        "card-sm": "20px",
      },
    },
  },
  plugins: [],
};
export default config;
