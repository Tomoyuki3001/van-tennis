/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        top: "url('./assets/top.jpg')",
        play: "url('./assets/home/play.jpg')",
        game: "url('./assets/game.jpg')",
        shopping: "url('./assets/home/shopping.jpg')",
        aboutTop: "url('./assets/about/court.jpg')",
        contact: "url('./assets/contact.jpg')",
        playHeader: "url('./assets/play/header.jpg')",
        watchHeader: "url('./assets/watch/header.jpg')",
        gearHeader: "url('./assets/gear/header.jpg')",
        contactHeader: "url('./assets/contact/header.jpg')",
      },
      backdropBrightness: {
        50: ".5",
      },
    },
  },
  plugins: [],
};
