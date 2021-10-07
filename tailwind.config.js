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
        'dark-purple': '#2c1320',
        'plum-web': '#f9b9f2',
        'royal-gold': '#ffd700'
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
