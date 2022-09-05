/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D2D2D',
        fadeGray: '#CCC',
        border: '#F2F2F2',
        lightGray2: '#8F8F8F',
        lightGray: '#CACACA',
        lightGray1: '#F9F9F9',
        success: '#1C8C64',
      },
      fontFamily: {
        regular: ['Lato'],
        bold: ['Lato-bold'],
        sourceSerif: ['Source Serif Pro'],
      },
      boxShadow: {
        navbarShadow: '0px 4px 6px rgba(0, 0, 0, 0.06)',
      },
      gridTemplateColumns: {
        twoToOne: '2fr 1fr',
      },
      lineHeight: {
        extra: '1.17',
      }
    },
  },
  plugins: [],
}
