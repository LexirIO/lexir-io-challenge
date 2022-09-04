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
      },
      fontFamily: {
        regular: ['Lato'],
        bold: ['Lato-bold'],
      },
      boxShadow: {
        navbarShadow: '0px 4px 6px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
