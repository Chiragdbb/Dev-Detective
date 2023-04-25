/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        "SpaceMono": 'Space Mono, monospace'
      },
      colors:{
        "lightBg":"#f6f8ff",
        "lightContentBg":"#fefefe",
        "grayishBlue":"#4b6a9b",
        "brightBlue":"#0079ff",
        "darkGrayishBlue":"#2b3442",
        "darkBg":"#141d2f",
        "darkContentBg":"#1e2a47",
        "errRed":"#ff0000",
      },
      boxShadow:{
        "myShadow":"0px 16px 30px -10px rgba(70, 96, 187, 0.2) ",
      },
    },
  },
  plugins: [],
}

