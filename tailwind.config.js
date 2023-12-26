/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
    },
    colors: {
      black: "#1A1A1A",
      red: "#ED1C24",
      orange: "#F15A24",
      yellow: "#F7931E",
    },
  },
  plugins: [],
};
