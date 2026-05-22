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
        "bg-primary": "#0A0A0A",
        "bg-secondary": "#111111",
        "bg-layer": "#171717",
        "text-primary": "#FAFAF9",
        "text-secondary": "#D4D4D4",
        accent: "#C46A3A",
        "accent-soft": "#D6C2A1",
        "accent-support": "#5F7A65",
        "border-subtle": "#1A1A1A",
        "border-mid": "#252525",
        "hover-bg": "#1C1C1C",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0, 0, 0, 0.5), 0 4px 20px rgba(0, 0, 0, 0.4)",
        elevated:
          "0 4px 12px rgba(0, 0, 0, 0.6), 0 12px 40px rgba(0, 0, 0, 0.5)",
        glow: "0 0 30px rgba(196, 106, 58, 0.15), 0 0 60px rgba(196, 106, 58, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
