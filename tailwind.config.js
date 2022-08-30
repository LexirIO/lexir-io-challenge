/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sxs: ["5px", "6px"],
        "3.5xl": ["34px", "34px"],
        location: ["16px", "25px"],
        productTitle: ["14px", "25px"],
        productPrice: ["15px", "20px"],
        city: ["22px", "35px"],
        portal: ["16px", "32px"],
      },
      spacing: {
        1.7: "7px",
        4.5: "18px",
        8.5: "34px",
        8.55: "35px",
        10.5: "42px",
        17: "66px",
        43.5: "175px",
        58: "234px",
        75: "305px",
        95: "379px",
      },
      boxShadow: {
        nav: "0px 4px 6px rgba(0, 0, 0, 0.06)",
        "product-card": "0px 4px 6px rgba(0, 0, 0, 0.06)",
      },
      colors: {
        "gray-110": "#f2f2f2",
        "green-500": "#1c8c64",
        "neutral-450": "#8f8f8f",
        "neutral-550": "#595959",
        "neutral-560": "#6b6b6b",
        "neutral-750": "#2d2d2d",
        "neutral-70": "#f9f9f9",
      },
      fontFamily: {
        serif: [
          "Source Serif Pro",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};
