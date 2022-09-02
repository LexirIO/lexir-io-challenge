/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary : '#2D2D2D',
      secondary : '#8F8F8F',
      primaryMain:'#6B6B6B',
      secondaryMain : '#F2F2F2',
      thirdMain : '#595959',
      white :'#FFFFFF'
    },
    fontFamily: {
      'brand' : ['Source Serif Pro', 'serif']
    },
     extend: {},
  },
  plugins: [],
}