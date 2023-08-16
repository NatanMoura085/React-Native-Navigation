/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      customStyles: {
        'flex-item-center': 'flex items-center', 
      },
      colors: {
        customCinza: "#78827e",
        customRed: "#FF0000", 
       
      },
    },
  },
  plugins: [],
}