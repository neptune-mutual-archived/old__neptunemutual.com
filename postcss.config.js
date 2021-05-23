module.exports = {
  plugins: {
    // 'postcss-import': {},
    tailwindcss: {},
    'postcss-nested': {},
    // 'postcss-custom-properties': {},
    autoprefixer: {},
    'postcss-preset-env': {
      stage: 2,
      features: {
        'nesting-rules': true
      }
    }
  }
}
