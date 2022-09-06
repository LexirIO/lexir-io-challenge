/** @type {import('tailwindcss').Config} */
module.exports = {  
  content: [   
        "./src/pages/**/*.{js,ts,jsx,tsx}",   
        "./src/components/**/*.{js,ts,jsx,tsx}",  
         ],
  theme: {   
         extend: {
              colors: {
                     'background': '#F9F9F9',
                     'primary': '#2D2D2D',
                     'secondary': '#CACACA',
                     'border-light': '#E7E7E7',
                     'body-primary': '#6B6B6B',
                     'confirmation': '#DCF3D7',
                     'footer-secondary': '#8F8F8F',
                     'success': '#1C8C64' 
              },
              lineHeight: {
                     'extra-loose': '3.5rem'
              },
              width: {
                     '103': '103px',
              }
         },
         fontFamily: {
              'Lato': ['Lato', 'sans-serif'],
              'Source-Sans-Pro': ['Source Sans Pro', 'sans-serif'],
              'Source-Sans-Pro-Bold': ['Source Sans Pro Bold', 'sans-serif'],
         }
         },  
  plugins: [],
}