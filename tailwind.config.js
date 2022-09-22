/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        bounceslow: "bounceslow 3s linear infinite",
        movetoleft: "movetoleft 5s linear infinite",
      },
      keyframes: {
        bounceslow: {
          "0%, 100%": {
            transform: " translateY(-10%)",
          },
          " 50%": {
            transform: "translateY(0)",
          },
        },
        movetoleft: {
          "0%,100%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        "extra-loose": "3",
        11: "3rem",
      },
      borderRadius: {
        large: "3.5rem",
      },
      screens: {
        tall: { raw: "(max-height: 400px)" },
        // => @media (min-height: 800px) { ... }
      },
    },
  },
  plugins: [],
};
