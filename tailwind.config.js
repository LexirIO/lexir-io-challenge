/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/public/**/*.html",
  ],
  theme: {
    fontFamily: {
      sans: ["Lato"],
      serif: ["Source Serif Pro"],
    },
    screens: {
      xs: "350px", // small device
      sm: "640px", // tablet
      md: "768px", // landscape
      lg: "1024px", // small desktop
      xl: "1280px", // desktop
      "2xl": "1536px", // normal desktop now
      "3xl": "1920px", // large desktop
    },
    colors: {
      neutral: {
        100: "#85CDB4",
        300: "#37A983",
        500: "#1C8C64", // Main
        700: "#167C56",
        900: "#01502F",
      },
      primary: {
        100: "#9E9E9E",
        300: "#6B6B6B",
        500: "#4A4A4A",
        700: "#2D2D2D", // Main
        900: "#000000",
      },
      secondary: {
        100: "#F9F9F9", // Main
        300: "#F2F2F2",
        500: "#E7E7E7",
        700: "#CCCCCC",
        900: "#AEAEAE",
      },
      success: {
        100: "#DCF3D7", // Main
        300: "#37A983",
        500: "#1C8C64",
        700: "#167C56",
        900: "#01502F",
      },
      warning: {
        100: "#F5E4B6",
        300: "#D98C41",
        500: "#D97716",
        700: "#CC7014",
        900: "#B26212",
      },
      error: {
        100: "#C47375",
        300: "#CB5757",
        500: "#BE4240",
        700: "#AD3A39",
        900: "#922B29",
      },
      shades: {
        white: "#FFFFFF",
        black: "#000000",
      },
      support: {
        700: "#6CAFE6",
        900: "#3482D0",
      },
    },
    extend: {},
  },
  plugins: [],
};
