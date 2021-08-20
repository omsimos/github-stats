module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        dmd: { max: "820px" },
        dlg: { max: "1024px" },
        dxl: { max: "1464px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
