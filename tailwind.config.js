/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2d2d2d",
        secondary: "#f9f9f9",
        borderSecondary: "#e7e7e7",
        subHeading: "#cccccc",
        addToCartBorder: "#f2f2f2",
        success: "#1c8c64",
        faded: "#8f8f8f",
      },
      height: {
        navbar: "104px",
        breadcrumbs: "64px",
        packshot: "488px",
        brandSuggestion: "394px",
      },
      width: {
        packshot: "748px",
        productDescription: "370px",
        addToCart: "380px",
        productDetails: "697px",
      },
      fontFamily: {
        heading: ["Sans Serif Pro"],
      },
    },
  },
  plugins: [],
};
