/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        comforter: ['"Comforter"', 'cursive'],
        poppins: ['"Poppins"', 'san-serif'],
        pacifico: ['"Pacifico"', 'cursive'],
      },
    },
  }, 
  plugins: [],
}

