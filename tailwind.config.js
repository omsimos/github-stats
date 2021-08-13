module.exports = {
  purge: ["./index.html", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        dmd: { max: "768px" },
        dlg: { max: "1024px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
