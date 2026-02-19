/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins jadi font utama
      },
      colors: {
        maroon: {
          900: '#4A0404',
        }
      }
    },
  },
  plugins: [],
}