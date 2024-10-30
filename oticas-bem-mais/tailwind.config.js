// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgPrimary:'#ff8e32',
        blackColor:'#1e1e1e',
        whiteColor:'#f4ebe7'
      },
      
    },
  },
  plugins: [],
};
