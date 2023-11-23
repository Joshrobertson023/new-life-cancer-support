/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      'gray': '#ECECEC',
      'brown': '#C7A08A',
      'blue': '#7E9299',
      'fontcolor': '#545454',
      'white': '#E6E6E6',
    },
    fontFamily: {
      'body': 'Lato',
      'header': 'Merriweather',
    },
    extend: {
      height: {
        '50': '50px',
      },
      width: {
        'maxExpand': '120rem',
      }
    },
  },
  plugins: [],
}

