/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Metrophobic', 'sans-serif'],
      },
      keyframes: {
        move: {
          '0%, 100%': {
            transform: `translate(4px, -4px)`,
          },
          '50%': {
            transform: `translate(2px, 2px)`,
          },
          '75%': {
            transform: `translate(-2px, 2px)`,
          },
        },
        slide: {
          from: {
            transform: `translateX(4px)`,
          },
          to: {
            transform: `translateX(-2px)`,
          },
        },
      },
      animation: {
        move: `move 5s linear infinite`,
        slide: `slide 2s linear infinite alternate`,
      },
      screens: {
        '1xl': `1366px`,
      },
    },
  },
  plugins: [],
};
