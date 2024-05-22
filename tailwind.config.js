/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ProductSans: ["ProductSans", "sans-serif"],
        Euclid: ["Euclid", "sans-serif"],
      },
      colors: {
        customRed: "#EC4E20",
        customBlue: "#016FB9",
        customPurple: "#1D1E2C",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
