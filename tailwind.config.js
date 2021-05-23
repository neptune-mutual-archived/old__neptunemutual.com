const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './layouts/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    options: { safelist: ['test'] }
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor'
    },
    fontFamily: {
      sans: ['Bai Jamjuree', 'sans-serif'],
      numbers: ['Poppins', 'sans-serif']
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
