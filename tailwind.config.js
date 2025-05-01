/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: '#1E1E2E',
          light: '#181825',
          DEFAULT: '#11111B',
          dark: '#0C0C14',
        },
        secondary: {
          lighter: '#89B4FA',
          light: '#74C7EC',
          DEFAULT: '#89DCEB',
          dark: '#B4BEFE',
        },
        accent: {
          python: '#3776AB',
          cpp: '#00599C',
          html: '#E34F26',
          css: '#1572B6',
          git: '#F05032',
          github: '#6E7681',
          jupyter: '#F37626',
          scikit: '#F7931E',
          pandas: '#150458',
          numpy: '#013243',
          aws: '#FF9900',
        },
        'text-primary': {
          lighter: '#CDD6F4',
          light: '#BAC2DE',
          DEFAULT: '#A6ADC8',
          dark: '#9399B2',
        },
        'text-secondary': {
          lighter: '#7F849C',
          light: '#6C7086',
          DEFAULT: '#585B70',
          dark: '#45475A',
        },
      },
    },
  },
  plugins: [],
} 