/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    fontFamily: {
      'bmo': ['Rokkitt', 'serif']
    },
    colors:{
      'bmo': {
        y: '#FEB234',
        b: '#772804',
      },
      'white': '#ffffff',
    },
    extend: {},
  },
  plugins: [],
}
