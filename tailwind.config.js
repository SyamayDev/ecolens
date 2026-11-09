/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
            dark: '#05130b', // Background color
            nav: '#0a1d13', // Navbar background
            green: '#1bde72', // Primary green accent
            'green-hover': '#15bd5e',
            'green-light': '#86efac' // For text highlights
        }
      },
    },
  },
  plugins: [],
}
