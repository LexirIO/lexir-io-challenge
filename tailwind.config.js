
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,ts,jsx,tsx,html,css}'],
	theme: {
	extend: {
		colors: {
			'defaultBg': '#FFFFFF',
			'footerBg':  '#2D2D2D',
			
			'dafaultText': 	'#000000',
			'primaryFont': 	'#2D2D2D',
			'secundaryFont':'#8F8F8F',
			'darkGray':		'#6B6B6B',
			
			'grayPattern': 		'#F2F2F2',
			'neutralMain-500':	'#1C8C64'
		  },
		boxShadow: {
			'pattern': '0px 4px 6px 0px #0000000F',
		  },
		keyframes: {
			openMenuUser: {
			  '0%': { opacity: 0 },
			  '25%': { opacity: 0.25 },
			  '50%': { opacity: 0.5 },
			  '75%': { opacity: 0.75 },
			  '100%': { opacity: 1 },
			},
			closeMenuUser: {
			  '0%': { opacity: 1 },
			  '25%': { opacity: 0.75 },
			  '50%': { opacity: 0.5 },
			  '75%': { opacity: 0.25 },
			  '100%': { opacity: 0 },
			},
		  },
		  animation: {
			'openMenu': 'openMenuUser .5s linear',
			'closeMenu': 'closeMenuUser .5s linear',
		  }, 
	},
  },
  plugins: [],
};
