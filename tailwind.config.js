/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ['Manrope', 'sans-serif'], // Use the font name defined in CSS
      },
    },
  },
  plugins: [],
};