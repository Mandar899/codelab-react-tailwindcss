module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        jmono: ["JetBrains Mono"],
        monolisa: ["MonoLisa Regular"],
        apercu: ["Apercu Pro"],
        fira: ["Fira Code"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
