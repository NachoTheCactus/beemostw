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
        b2: '#693c22',
      },
      'white': '#ffffff',
      'black': '#000000',
    },
    extend: {},
  },
  plugins: [],
}
