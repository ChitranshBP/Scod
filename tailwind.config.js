/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        scod: '#1876AA',
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}