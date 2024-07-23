/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {  
    fontFamily:{
    'sans':['Kanit', 'sans-serief']
  },
    extend: {

      backgroundImage:{
        "home": "url('/src/assets/bg.jpg')"
      }
    },
  },
  plugins: [],
}