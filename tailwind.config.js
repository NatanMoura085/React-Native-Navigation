/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '999': '999',
      },
      customStyles: {
        'flex-item-center': 'flex items-center', 
      },
      colors: {
        customCinza: "#78827e",
        customRed: "#FF0000",
        brightBlueCard: "#c3f1cc",
        BurntYellow:"#e5eec1",
        LightBlue:"#abedea",
        LightBlue2:"#bfe8ef"
      },
      fontFamily:{
        Inter400: "Inter_400Regular",
        Inter600: "Inter_600SemiBold",
        Inter700: "Inter_700Bold",
        Inter800: "Inter_800ExtraBold"
      }
    },
  },
  plugins: [],
}