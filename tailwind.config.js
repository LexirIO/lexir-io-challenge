module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  mode: "jit",
  theme: {
    colors: {
      primary: 'rgba(45,45,45,1)',
      secondary: 'rgba(249,249,249,1)',
      shadow: 'rgba(0, 0, 0, 0.06)',
      sucess: 'rgba(28, 140, 100, 1)',
      smallHeader: 'rgba(143,143,143,1)',
      paragrah: "rgba(0, 0, 0, 0.7)",
      cardsSeparator: "rgba(242, 242, 242, 1)",
      cardsBorder: "rgba(231, 231, 231, 1)",
      cardTextContent: "rgba(107, 107, 107, 1)",
      white: "rgba(255,255,255,1)"
    },
    fontFamily: {
      mainFont: ['Source Serif Pro', "serif"],
      secondaryFont: ['Lato', "sans-serif"],
    },
    extend: {
      borderRadius: {
        radiusS: '5px',
        radiusXs: '4px',
      },
      fontSize: {
        fontL: '48px',
        fontS: '22px',
        fontXS: '1rem',
        fontXXS: '14px',
      },
      fontWeight: {
        bold: '700',
        semiBold: '500',
        regular: '200',
        light: '300',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      }

    },
  },
  plugins: [],
}
