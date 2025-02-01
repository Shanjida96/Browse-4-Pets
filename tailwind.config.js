/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors:{
           'nav-primary': '#FFF9F4',
            'btn-primary':'#FFDC26'
        }
      },
    },
    plugins: [],
  }