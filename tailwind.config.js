/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        lobster: ['"Lobster Two"']
      },
      colors: {
        customGray: '#393939',
        primary_color: "#56AEF5",

      },
    },
  },
  plugins: [],
}

