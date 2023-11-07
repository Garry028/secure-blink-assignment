/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backgr': "url('./src/assets/back.svg')",
        'backContact': "url('./src/assets/contact.svg')",
      },
    },
    fontFamily:{
      Poppins: ["Poppins, sans-serif"],
    }
  },
  plugins: [],
}

