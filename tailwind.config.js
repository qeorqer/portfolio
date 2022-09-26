/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    fontFamily: {
      sans: ['Oswald', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
