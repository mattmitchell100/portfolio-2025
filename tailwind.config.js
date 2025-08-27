/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enable class-based dark mode
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // custom semantic aliases (optional usage in future)
        surface: {
          DEFAULT: 'var(--color-surface)',
          alt: 'var(--color-surface-alt)'
        },
        text: {
          DEFAULT: 'var(--color-text)',
          muted: 'var(--color-text-muted)'
        }
      }
    },
  },
  plugins: [],
}
