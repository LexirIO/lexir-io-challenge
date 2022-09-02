/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        productgrey: '#F2F2F2',
        producttext: '#8F8F8F',
        companytext:'#2D2D2D',
        cartgreen:'#1C8C64',
        locationgrey:'#595959',
        filtergrey:'#F9F9F9'
      }
    },
  },
  plugins: [],
}
