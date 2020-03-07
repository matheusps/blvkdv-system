module.exports = {
  plugins: [
    require('tailwindcss')('./src/design-system/theme/tailwind.config.js'),
    require('autoprefixer'),
  ],
}
