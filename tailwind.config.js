module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
    },
    extend: {
      colors: {
        l11AquaGreen: '#19A6A5',
        l11LightGreen: '#A8FE75',
        l11Body: '#484848',
        l11Gray: '#727272',
        l11GrayLighten: '#F9F9F9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
