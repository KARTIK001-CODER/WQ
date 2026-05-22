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
        "bg-primary": "#050505",
        "bg-secondary": "#0A0A0A",
        "bg-layer": "#0F0F0F",
        "bg-elevated": "#141414",
        "text-primary": "#F5F5F3",
        "text-secondary": "#A3A3A3",
        accent: "#C46A3A",
        "accent-soft": "#D6C2A1",
        "accent-support": "#5F7A65",
        "border-subtle": "rgba(255, 255, 255, 0.03)",
        "border-mid": "rgba(255, 255, 255, 0.06)",
        "border-active": "rgba(255, 255, 255, 0.1)",
        "hover-bg": "rgba(255, 255, 255, 0.02)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255, 255, 255, 0.02)",
        raised: "0 8px 30px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(255, 255, 255, 0.03)",
        elevated: "0 12px 40px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255, 255, 255, 0.04)",
        glow: "0 0 40px rgba(196, 106, 58, 0.08), 0 0 80px rgba(196, 106, 58, 0.03)",
      },
    },
  },
  plugins: [],
};
export default config;
