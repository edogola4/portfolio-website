// tailwind.config.cjs
// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography')
const forms = require('@tailwindcss/forms')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Color - Deep Slate Blue
        primary: {
          50: '#f5f7f8',
          100: '#e0e6ea',
          200: '#c1cdd5',
          300: '#92a9b8',
          400: '#5c7d94',
          500: '#2c3e50',
          600: '#263847',
          700: '#1f2f3a',
          800: '#1a2732',
          900: '#16212b',
          950: '#0f151c',
        },
        // Accent Color - Burnt Sienna
        accent: {
          50: '#fdf5f3',
          100: '#fce8e4',
          200: '#fad5cf',
          300: '#f6b9ad',
          400: '#ee8f7c',
          500: '#e2725b',
          600: '#ce4f35',
          700: '#ac3f29',
          800: '#8e3726',
          900: '#763225',
          950: '#3f1611',
        },
        // Tertiary Color - Sage Green
        tertiary: {
          50: '#f6f7f3',
          100: '#ebeee5',
          200: '#d8dec9',
          300: '#b9c6a5',
          400: '#8a9b68',
          500: '#6d7f4f',
          600: '#54653e',
          700: '#414f32',
          800: '#36402a',
          900: '#2f3726',
          950: '#171d11',
        },
        // Neutral Colors
        neutral: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
          950: '#0a0c0d',
        },
        // Pale Gold for accents
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
        secondary: {
          50: '#fbf6f3',
          100: '#f5e8e1',
          200: '#e9cdc0',
          300: '#daac97',
          400: '#c57b57',
          500: '#b8653d',
          600: '#a95533',
          700: '#8d432c',
          800: '#713829',
          900: '#5c3023',
          950: '#31160d',
        },
        background: {
          DEFAULT: '#F5F1E9',
          dark: '#2B2D2F',
        },
        text: {
          DEFAULT: '#2B2D2F',
          light: '#F5F1E9',
        },
        accent: {
          DEFAULT: '#4A2C40',
          light: '#6a3f5a',
          dark: '#321d2b',
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
}