/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#FBF7F0',
          100: '#F3E8D6',
          200: '#E4C99A',
          300: '#CDA968',
          400: '#B4834B',
          500: '#8B5E34',
          600: '#6E4726',
          700: '#54341C',
          800: '#3A2313',
          900: '#221408',
        },
        charcoal: {
          DEFAULT: '#1E1B18',
          light: '#2B2621',
        },
        cream: '#FAF6EF',
        gold: '#C99A3D',
      },
      fontFamily: {
        display: ['"Fraunces"', '"Noto Serif Telugu"', 'serif'],
        body: ['"Inter"', '"Noto Sans Telugu"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 10px rgba(34, 20, 8, 0.08)',
      },
    },
  },
  plugins: [],
}
