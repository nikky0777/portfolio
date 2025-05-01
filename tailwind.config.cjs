/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#13111C', // Very dark purple background
          light: '#1E1B2E',  // Dark purple secondary
          lighter: '#2D2B3A', // Medium dark purple tertiary
          dark: '#0C0A14',   // Darkest purple for gradients
        },
        secondary: {
          DEFAULT: '#4ADE80', // Bright green
          light: '#86EFAC',  // Light green
          dark: '#22C55E',   // Dark green
        },
        text: {
          primary: '#ffffff',    // Pure white
          secondary: '#94A3B8',  // Cool gray
          accent: '#4ADE80',     // Green accent for special text
        },
        accent: {
          purple: '#6D28D9',  // Accent purple for highlights
          green: '#4ADE80',   // Matching green
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 