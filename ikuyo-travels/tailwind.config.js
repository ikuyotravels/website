/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F4F1ED',
        'text-primary': '#2A3A3D',
        'text-secondary': '#6B7280',
        accent: '#C46243',
        'accent-hover': '#A9543A',
        secondary: '#9CA3AF',
      },
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
        serif: ['Noto Serif JP', 'serif'],
      },
    },
  },
  plugins: [],
}
