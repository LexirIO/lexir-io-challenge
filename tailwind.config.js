/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lato: "Lato, sans-serif",
        Source: "Source",
      },
      boxShadow: {
        LexirSh: "0px 4px 0px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
