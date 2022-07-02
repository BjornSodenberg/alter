/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      "alter-green": "#66BA8D",
      "alter-gray": "#323648",
      "alter-bg": "#F0EEEB",
      white: "#ffffff",
      black: "#000000",
      "dark-gray": "#323648",
    },
    extend: {
      fontFamily: {
        futura: ["Futura", "Arial", "sans-serif"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin")],
};
