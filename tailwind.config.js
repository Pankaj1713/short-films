const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E69E10",
        secondary: "#000000",
        paragraphColor: "#B3B3B3",
        bgGray: "#1A1A1A",
        borderColor: "#333333",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
});
