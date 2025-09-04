/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      spacing: {
        'xs': '0.5rem',    // 8px
        'sm': '1rem',      // 16px
        'md': '1.5rem',    // 24px
        'lg': '2rem',      // 32px
        'xl': '3rem',      // 48px
        '2xl': '4rem',     // 64px
        '3xl': '6rem',     // 96px
        '4xl': '8rem',     // 128px
        '5xl': '10rem',    // 160px
        '6xl': '12rem',    // 192px
      },
      maxWidth: {
        '8xl': '88rem',    // 1408px
        '9xl': '96rem',    // 1536px
        'prose': '65ch',   // Optimal line length for readability
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '4rem' }],
        '7xl': ['4.5rem', { lineHeight: '5rem' }],
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      colors: {
        // Primary - Deep Forest Green
        primary: {
          50: '#f0f5f3',
          100: '#d9e8e2',
          200: '#b6d0c5',
          300: '#86b1a1',
          400: '#5e8e7d',
          500: '#2C5E4F',  // Base primary color
          600: '#254f42',
          700: '#1e4036',
          800: '#18312a',
          900: '#12251f',
          950: '#0c1915',
        },
        // Accent - Burnt Sienna
        accent: {
          50: '#fdf5f3',
          100: '#fce8e4',
          200: '#f9d2cc',
          300: '#f3b2a6',
          400: '#ea8573',
          500: '#E07A5F',  // Base accent color
          600: '#c85e44',
          700: '#a64a35',
          800: '#8a3f2f',
          900: '#72382d',
          950: '#3d1a13',
        },
        // Neutral - Warm Off-White
        neutral: {
          50: '#faf9f7',
          100: '#F5F1E9',  // Base neutral background
          200: '#e8e2d8',
          300: '#d7cec0',
          400: '#c2b6a2',
          500: '#b0a28a',
          600: '#9e8c70',
          700: '#83715a',
          800: '#6b5c4b',
          900: '#584c3f',
          950: '#2f2820',
        },
        // Secondary - Slate Blue
        secondary: {
          50: '#f5f7f7',
          100: '#e5e9ea',
          200: '#c6cfd1',
          300: '#9dacb0',
          400: '#6B7F82',  // Base secondary color
          500: '#5a6c6f',
          600: '#4e5b5e',
          700: '#434d4f',
          800: '#3c4445',
          900: '#343a3b',
          950: '#1f2324',
        },
        // Text colors
        text: {
          DEFAULT: '#2B2D42',  // Charcoal Gray for text
          light: '#F5F1E9',   // Light text for dark backgrounds
          dark: '#1a1a1a',    // Darker text for better contrast
        },
        // Background colors
        background: {
          DEFAULT: '#F5F1E9',  // Warm Off-White
          dark: '#1a1f1d',     // Dark background for dark mode
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-fira-code)'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'opacity': 'opacity',
        'transform': 'transform',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },
      opacity: {
        '0': '0',
        '5': '0.05',
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '80': '0.8',
        '90': '0.9',
        '95': '0.95',
        '100': '1',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['active', 'disabled', 'dark'],
      textColor: ['active', 'disabled', 'dark'],
      borderColor: ['active', 'disabled', 'dark'],
      ringColor: ['hover', 'active', 'focus', 'dark'],
      ringWidth: ['hover', 'active', 'focus'],
      ringOffsetWidth: ['hover', 'active', 'focus'],
      ringOffsetColor: ['hover', 'active', 'focus'],
      scale: ['active', 'group-hover'],
      translate: ['active', 'group-hover'],
      rotate: ['active', 'group-hover'],
    },
  },
  plugins: [
    typography,
    forms,
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};