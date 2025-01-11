import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
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
  			background: 'black',
  			border: '#353539'
  		},
  		width: {
  			wrapper: '75%'
  		},
  		fontFamily: {
  			roboto: [
  				'Roboto Mono',
  				'Plus Jakarta Sans'
  			],
  			space_mono: [
  				'Space Mono',
  				'serif'
  			],
  			roboto_mono: [
  				'Roboto Mono',
  				'serif'
  			],
  			armstrong: [
  				'Armstrong',
  				'Plus Jakarta Sans'
  			],
  			armstrongBold: [
  				'ArmstrongBold',
  				'Plus Jakarta Sans'
  			]
  		},
  		gridTemplateRows: {
  			'16': 'repeat(16, minmax(0, 1fr))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
