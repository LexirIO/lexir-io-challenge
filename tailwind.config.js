const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-neutral': '#1C8C64',
        'cgreydefault': '#F2F2F2',
        'cgreysec': '#F9F9F9',
        'cgreyter': '#8F8F8F',
        'cgreydark': '#2d2d2d',
      }, 
      fontFamily: {
        source: 'source serif pro',
        lato: ['Lato', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}