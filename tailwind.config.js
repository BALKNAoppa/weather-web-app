/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        'background-color' : '#F3F4F6',
        'dark-background' : '#0F141E',
        'dark-side-background' : '#1E293B',
      }
    },
  },
  plugins: [],
};