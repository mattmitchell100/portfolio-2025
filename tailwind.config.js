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
        },
        // New brand-neutral palette (cool grays) & accent orange
        brand: {
          gray: {
            50: '#f8f9fa',
            100: '#f1f3f5',
            200: '#e5e7eb',
            300: '#d0d4d9',
            400: '#a8afb7',
            500: '#808891',
            600: '#5b636c',
            700: '#454c54',
            800: '#30363d',
            900: '#1d2227'
          },
          orange: {
            50: '#fff6ed',
            100: '#ffe7d1',
            200: '#fecba1',
            300: '#fda56b',
            400: '#fb7f37',
            500: '#f96306',
            600: '#d74d02',
            700: '#b03c05',
            800: '#7a2906',
            900: '#441504'
          }
        }
      }
    },
  },
  plugins: [],
}
