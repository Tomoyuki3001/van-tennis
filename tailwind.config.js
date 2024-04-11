/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        top: "url('./assets/top.jpg')",
      },
    },
  },
  plugins: [],
};
