/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#090a0d',
        surface: {
          900: '#111318',
          800: '#191c24',
          700: '#232733',
          600: '#323748',
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#f3cf58',
          dark: '#a8861e',
        },
        amberAccent: '#e5a93c',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Outfit"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
