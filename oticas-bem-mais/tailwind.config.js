// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], 
      },
      colors:{
        bgPrimary:'#ff8e32',
        blackColor:'#1e1e1e',
        whiteColor:'#f4ebe7',
        skinColor: '#ffd7a8',
        redColor: '#f05706'
      },
    },
  },
  plugins: [],
};
