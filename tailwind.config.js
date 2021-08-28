const colors = require('tailwindcss/colors');

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
        l11GrayLight: '#EFEFEF',
        l11GrayLighten: '#F9F9F9',
        cyan: colors.cyan,
      },
      boxShadow: {
        l11Basic: '0px 2px 6px rgba(0, 0, 0, 0.2)',
        l11Soft: '0px 0px 10px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
