/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      white: "#fff",
      primary: {
        100: "#9E9E9E",
        700: "#2D2D2D",
      },
      secondary: {
        100: "#F9F9F9",
        200: "#e7e7e7",
      },
      neutral: {
        500: "#1C8C64",
      },
      error: {
        500: "#CB5757",
      },

      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      sans: ["Lato"],
      heading: ["Source Serif Pro"],
    },
  },
};
