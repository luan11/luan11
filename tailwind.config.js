const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Exo', 'sans-serif'],
    },
    extend: {
      colors: {
        l11AquaGreen: '#19A6A5',
        l11LightGreen: '#A8FE75',
        l11Body: '#262d2e',
        l11Gray: '#3b4240',
        l11GrayLight: '#EFEFEF',
        l11GrayLighten: '#F9F9F9',
        cyan: colors.cyan,
        l11BodyBackground: '#2d3a38',
        l11Primary: '#75fe9f',
        l11Secondary: '#052762',
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
