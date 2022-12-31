/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '100': '26rem',
        '120': '30rem',
        '150':  '40rem',
      }
    },
  },
  plugins: [],
}