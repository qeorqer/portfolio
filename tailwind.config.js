/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '25px',
    },
    fontFamily: {
      sans: ['Oswald', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
