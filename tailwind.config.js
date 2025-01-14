/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['title', 'sans-serif'],
        regular: ['regular', 'sans-serif'],
      },
      colors: {
        red: 'rgba(225, 49, 49, 1)',
        white: 'rgba(255, 255, 255, 1)',
        'white-30': 'rgba(255, 255, 255, 0.3)',
        'green-1': 'rgba(215, 217, 205, 1)',
        'green-2': 'rgba(177, 192, 163, 1)',
        'green-3': 'rgba(94, 118, 103, 1)',
        'green-4': 'rgba(59, 84, 67, 1)',
        'green-5': 'rgba(34, 44, 34, 1)',
        black: 'rgba(0,0,0,1)',
        'black-20': 'rgba(0, 0, 0, 0.2)',
        'black-50': 'rgba(0, 0, 0, 0.5)',
      },
      fontSize: {
        'title-1': '3rem',
        'title-2': '2rem',
        'text-1': '1.6rem',
        'text-2': '1.2rem',
        'text-3': '1rem',
        'text-4': '.8rem',
        'text-5': '.6rem',
      },
      borderRadius: {
        xl: '.4rem',
        '2xl': '2.4rem',
        '3xl': '5rem',
        '4xl': '100rem',
      },
    },
  },
  plugins: [],
};
