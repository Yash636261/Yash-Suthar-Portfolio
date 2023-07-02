/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1F1F1F',
        'moderate': '#8685EF',
        'light': '#FAF8FF'
      },
    }
  },
  plugins: [],
}