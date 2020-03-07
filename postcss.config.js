module.exports = {
  plugins: [
    require("tailwindcss")("./src/design-system/tailwind.config.js"),
    require("autoprefixer")
  ]
};
