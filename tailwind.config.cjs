/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary - Deep Forest Green
        primary: {
          50: '#f0f5f3',
          100: '#d9e8e2',
          200: '#b6d0c5',
          300: '#86b1a1',
          400: '#5e8e7d',
          500: '#447263',
          600: '#345b4f',
          700: '#2c4a41',
          800: '#253c36',
          900: '#1e3f33',
          950: '#0f231d',
        },
        // Accent - Burnt Sienna
        accent: {
          50: '#fdf5f1',
          100: '#fbe9e0',
          200: '#f8d4c2',
          300: '#f2b696',
          400: '#ea8f61',
          500: '#d87d4a',
          600: '#c96a3f',
          700: '#a75333',
          800: '#89452e',
          900: '#703c2c',
          950: '#3c1d14',
        },
        // Neutral - Ivory
        neutral: {
          50: '#fcfbf9',
          100: '#f8f5f0',
          200: '#f1e9de',
          300: '#e8dac4',
          400: '#d9c29f',
          500: '#cca87e',
          600: '#bd9366',
          700: '#a07654',
          800: '#836047',
          900: '#6b4f3d',
          950: '#38291f',
        },
        // Secondary - Slate Blue
        secondary: {
          50: '#f5f6f7',
          100: '#e5e8ea',
          200: '#cdd3d7',
          300: '#a9b4bc',
          400: '#7e8d99',
          500: '#6c7a89',
          600: '#57626f',
          700: '#47515b',
          800: '#3e464f',
          900: '#373d44',
          950: '#24282e',
        },
        // Gold for accents
        gold: {
          50: '#fbf8f2',
          100: '#f5efdf',
          200: '#e6c79c',
          300: '#e0b97d',
          400: '#d6a45b',
          500: '#ce8e3e',
          600: '#c07633',
          700: '#9f5c2c',
          800: '#804a2a',
          900: '#693e27',
          950: '#3a2113',
        },
        // Background colors
        background: {
          DEFAULT: '#F8F5F0',
          dark: '#121B17',
        },
        // Text colors
        text: {
          DEFAULT: '#2D2D2D',
          light: '#F8F5F0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-fira-code)'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [
    typography,
    forms,
  ],
};