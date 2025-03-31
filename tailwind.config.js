/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ["Roboto", 'serif'],
        'dirt': ["Rubik Dirt", 'serif'],
      }
    },
  },
  plugins: [],
}