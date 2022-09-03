module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src//components/**/*.{js,ts,jsx,tsx}",
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
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: {
    // tailwindcss: {},
    tailwindcss: { config: './tailwind.config.js' },
    autoprefixer: {},
  },
}
