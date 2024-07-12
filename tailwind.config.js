/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'img1':"url(./files/forest.jpg)",
        'img2':"url(./files/forest2.jpg)"
    
      },
      fontFamily:{
        'cur':['Cedarville Cursive', 'cursive'],
        "cur2":['Playwrite CU', 'cursive'],
        'rob':['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

