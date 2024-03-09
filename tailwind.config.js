/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      Darkcyan: 'hsl(185, 75%, 39%)',
      Desaturatedblue: 'hsl(229, 23%, 23%)',
      Grayishblue: 'hsl(227, 10%, 46%)',
      Darkgray: 'hsl(0, 0%, 59%)',
      White: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      Kumbh: ["kumbh-sans", "sans-serif"],
    },
  },
  plugins: [],
}

