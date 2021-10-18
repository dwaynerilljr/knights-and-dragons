module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'uncial':["'Uncial Antiqua', 'sans'"],
        'cardo':["'Cardo', 'sans'"]
      },
      colors: {
        'college-navy': '#002a5c',
        'action-green': '#7ac142',
        'wolf-grey': '#b2b7bb',
        'teal': '#2d5980'
      },
      height: {
        'quarter': '25vh',
        'half': '50vh'
      },
      width: {
        'quarter': '25vw'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
