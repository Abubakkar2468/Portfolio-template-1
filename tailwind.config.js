/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['DM Sans', 'sans-serif'],
        sans: ['Manrope', 'sans-serif']
      },
      colors: {
        ink: '#182230',
        cloud: '#f5f7fa',
        accent: '#2563eb',
        'accent-dark': '#1d4ed8'
      },
      boxShadow: {
        soft: '0 18px 50px rgba(24, 34, 48, 0.08)'
      }
    }
  },
  plugins: []
};
