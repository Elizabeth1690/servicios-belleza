const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        colorselect: '#F2F5F7',
        colorbtnclear: '#788896',
        colorbtndark: '#4B5C6B',
        colortext: '#69747E',
        colorborder: '#D8DFE6',
        colorbtnschedule: '#C3CFD9',
        colorprogresbar: '#1AAE9F'
      },

    },
  },

  plugins: [
    flowbite.plugin(),
  ],
}