// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        bgPrimary: "#ff8e32",
        blackColor: "#1e1e1e",
        whiteColor: "#f4ebe7",
        skinColor: "#ffd7a8",
        redColor: "#f05706",
        greyColor: "#ededed",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-80%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: { slideDown: "slideDown 0.5s ease-out forwards" },
    },
  },
  plugins: [],
};
