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
            transform: `translate(10%, -10%)`,
          },
          '50%': {
            transform: `translate(5%, 5%)`,
          },
          '75%': {
            transform: `translate(-5%, 5%)`,
          },
        },
      },
      animation: {
        move: `move 5s linear infinite`,
      },
      screens: {
        '1xl': `1366px`,
      },
    },
  },
  plugins: [],
};
