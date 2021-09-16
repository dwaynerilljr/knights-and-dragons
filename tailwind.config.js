module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'uncial':["'Uncial Antiqua', 'sans'"],
        'cardo':["'Cardo', 'sans'"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
