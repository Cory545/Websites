/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'background-1' : "url('/img/background.png')"
      },
      height: {
        '128': '32rem',
      },
      width: {
        '128': '32rem',
      }
      
    },
  },
  plugins: [],
}