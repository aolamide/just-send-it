/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        akaya: ['Akaya Telivigala', 'system-ui'],
        poppins: ['Poppins', 'sans-serif'],
        josefinSans: ['Josefin Sans', 'sans-serif']
      },
      colors: {
        primary : '#1E6D80',
        successGreen: '#00C795'
      }
    },
  },
  plugins: [],
}

