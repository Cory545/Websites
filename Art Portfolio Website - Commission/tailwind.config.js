/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'background-1' : "url('/Art Portfolio Website - Commission/img/background.jpg')"
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
