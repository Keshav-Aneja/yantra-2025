import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1D1D1D",
      },
      fontFamily: {
        roboto: ['Roboto Mono', 'Plus Jakarta Sans'],
      },
      gridTemplateRows: {
        16: 'repeat(16, minmax(0, 1fr))',
      },
      fontFamily: {
        roboto: ["Roboto", 'serif'],
        space_mono: ["Space Mono", 'serif'],
        roboto_mono: [ "Roboto Mono", 'serif']
      }
    },
  },
  plugins: [],
} satisfies Config;