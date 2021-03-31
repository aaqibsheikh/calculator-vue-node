module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'calc-red': '#c1322f'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
