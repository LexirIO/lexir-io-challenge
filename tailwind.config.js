/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue, tsx}",
    "./src/**/*",
    "./components/**/*",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        sourceSerif: ["Source Serif Pro", "serif"],
      },
      maxWidth: {
        large: "128.0rem",
      },
      boxShadow: {
        small: "0px 4px 6px rgba(0, 0, 0, 0.06)",
      },
      screens: {
        mxl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        mlg: { max: "1153px" },
        // => @media (max-width: 1023px) { ... }

        mmd: { max: "973px" },
        // => @media (max-width: 767px) { ... }

        msm: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        mvsm: { max: "500px" },
        // => @media (max-width: 500px) { ... }
        m2vsm: { max: "420px" },
        // => @media (max-width: 420px) { ... }
        reversemsm: "639px",
        // => @media (min-width: 639px) { ... }
      },
    },
  },

  plugins: [],
};
