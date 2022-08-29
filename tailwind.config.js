/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'title': '34px',
      '16px':'16px',
      '22px':'22px',
    },
    fontFamily:{
     'body': ['Lato']
    },
    extend: {
      colors:{
      primary:"#2D2D2D",
      secondary:"#8F8F8F",
      third:"#F2F2F2",
      fourth:"#6B6B6B",
      fifth:"#1C8C64",
      sixth:"#595959",
      seventh:"#F9F9F9",
      },
      padding: {
        '0.25': '2.5px',
      }
    },
  },
  plugins: [],
}