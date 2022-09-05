/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            main: ["Lato", "sans-serif"],
            title: ["Source Serif Pro", "serif"],
        },
    },
    plugins: [],
};
