import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
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
