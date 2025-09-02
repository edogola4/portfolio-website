// tailwind.config.cjs
// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography')
const forms      = require('@tailwindcss/forms')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef5f3',
          100: '#d5e7e2',
          200: '#aacfc4',
          300: '#79b0a2',
          400: '#4d8b7c',
          500: '#2c5e4f',
          600: '#234e42',
          700: '#1d3f36',
          800: '#18332c',
          900: '#132b25',
          950: '#0a1613',
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