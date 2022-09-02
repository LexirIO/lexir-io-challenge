/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        light: "#ffffff", // White
        dark: "#0f172a", // slate-900
      },
    },
  },
  plugins: [],
};
