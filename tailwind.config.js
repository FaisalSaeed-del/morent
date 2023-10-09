/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#3563E9',
        'secondary':'#1A202C',
        'tertiary':'#596780',
        'gray':'rgba(195, 212, 233, 0.40)',
        'footer':'rgba(19, 19, 19, 0.60)',
        'borderColor':'rgba(19, 19, 19, 0.16)',
      }
    },
  },
  plugins: [],
}