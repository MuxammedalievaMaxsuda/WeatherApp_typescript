/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      mont:"Montserrat, sans-serif",
    },
    screens:{
      xs: '0px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1400px'
    },
    extend: {},
  },
  plugins: [],
}