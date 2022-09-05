/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			white: '#FFFFFF',
			black: {
				DEFAULT: '#000000',
				100: 'rgba(0, 0, 0, 0.7)',
			},
			primary: {
				DEFAULT: '#2D2D2D',
			},
			secondary: {
				DEFAULT: '#8F8F8F',
				light: '#F2F2F2',
			},
			grey: {
				100: '#F9F9F9',
				200: '#E7E7E7',
				300: '#CACACA',
				400: '#CCCCCC',
			},
			success: {
				DEFAULT: '#1C8C64',
			},
		},
		fontFamily: {
			lato: ['Lato', 'sans-serif'],
			'source-serif-pro': ['Source Serif Pro', 'serif'],
		},
		boxShadow: {
			DEFAULT: '0px 4px 6px rgba(0, 0, 0, 0.06)',
		},
		extend: {},
	},
	plugins: [],
};
