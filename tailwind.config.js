/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          500: '#f1f1f1'
        },
        sky: {
          500: '#008cff',
          600: '#007ee6'
        }
      }
    },
  },
  plugins: [],
}