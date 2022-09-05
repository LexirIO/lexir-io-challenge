# Lexir | Frontend Developer Challenge
 
## Junior Frontend Developer
 
Vercel Deployment:
 
[`https://lexir-io-challenge-sooty.vercel.app/#`](https://lexir-io-challenge-sooty.vercel.app/#)
 
### 01 - Initial Setup
 
- Forked and cloned the repo
- Installed editorconfig VS Code extension and created .editorconfig file
- Created jsconfig.json file. Allows to import added modules without needing relative paths
- Installed and initialised Tailwind, tailwindconfig and postcssconfig
- Created \_document.tsx file to import google fonts. This step required to extend tailwind.config theme to use a costume class
 
### 02 - Development
 
- Decided and created challenge file structure and components
- Created a "FixedLayout" Component where static components will reside all across the page. For example: Head elements, Navbar and Footer components.
- Created ProductPage and imported it as Children of FixedLayout
- Developed ProductPage with separate components
 
### 03 - Enhancements
 
- Added logic to quantity "-" and "+" buttons. With use of useState and an onClick Typescript typed function to add quantity and change price
- Extended a boxShadow costume element in tailwind.config
- Added responsive and mobile version
- Used next.js Image to import and use images/photos
- For Icons, used svg code instead of importing them
 
### 04 - Comments, Decisions and Suggestions
 
- Was divided between using tailwind default colour palette or adding all colours used in figma project to global.css (or extending them). Decided to use tailwind default colours to be quicker.
- For Icons, decided to use the svg code directly for a better control and responsiveness of the icon. It's quicker for the Web and allows me to edit and style it.
- Add a simple logic to quantity buttons to use and show a bit of Typescript.
