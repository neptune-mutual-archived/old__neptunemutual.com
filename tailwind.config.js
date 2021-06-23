const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    options: { safelist: ['test'] }
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      'light-blue': colors.sky,
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
