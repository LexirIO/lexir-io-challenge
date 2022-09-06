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
        'light-grey': '#F9F9F9',
        'medium-grey': '#8F8F8F',
        'primary': '#6B6B6B',
        'success': '#1C8C64'
      }
    },
  },
  plugins: [],
}
