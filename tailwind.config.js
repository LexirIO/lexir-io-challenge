/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'serifpro': ['Source Serif Pro', 'sans-serif']
      },
      colors: {
        'light-black': '#2D2D2D',
        'light-grey': '#F9F9F9'
      }
    },
  },
  plugins: [],
}
