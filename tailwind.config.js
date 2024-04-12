/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        top: "url('./assets/top.jpg')",
        play: "url('./assets/play.jpg')",
        game: "url('./assets/game.jpg')",
        shopping: "url('./assets/shopping.jpg')",
      },
      backdropBrightness: {
        50: ".5",
      },
    },
  },
  plugins: [],
};
