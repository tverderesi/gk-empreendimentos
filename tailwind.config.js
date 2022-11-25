/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['Figtree', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'cadetblue': {
          50: '#cde3e5',
          100: '#abd5d8',
          200: '#89c6ca',
          300: '#78bfc3',
          400: '#4ab5ba',
          500: '#45a8ae',
          600: '#3e9398',
          700: '#377e81',
          800: '#2f6d70',
          900: '#265c5e',
        },
        'primary': 'cadetblue',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
