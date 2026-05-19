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
        'morning-mist': '#F6FAF8',
        'pure-white': '#FFFFFF',
        verdant: '#3D8C6F',
        'verdant-dark': '#2E6B55',
        'sea-foam': '#6BB5A1',
        sunlight: '#F2C94C',
        'deep-moss': '#1E2D26',
        'muted-pine': '#5C7A6B',
        'fresh-sprout': '#4CAF84',
        'soft-coral': '#E07B6C',
        'mist-border': '#E0EDE5',
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'dewdrop': '0 4px 20px rgba(61, 140, 111, 0.08), 0 1px 3px rgba(30, 45, 38, 0.04)',
        'dewdrop-hover': '0 12px 32px rgba(61, 140, 111, 0.12), 0 4px 8px rgba(30, 45, 38, 0.06)',
        'sunlight-glow': '0 8px 24px rgba(61, 140, 111, 0.25)',
        'card-shine': 'inset 0 1px 0 rgba(255, 255, 255, 0.6)',
      },
    },
  },
  plugins: [],
};
export default config;
