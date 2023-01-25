/* eslint-disable global-require */
module.exports = {
  darkMode: 'class',
  purge: {
    content: ['./src/**/*.tsx', './public/index.html'],
    options: {
      safelist: ['h-8', 'h-11'],
    },
  },
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
      mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
    },
    extend: {
      // boxShadow: {
      //   outlineLg: '0 0 0 4pt var(--color-dark-800)',
      //   outlineMd: '0 0 0 2pt var(--color-dark-800)',
      //   outlineSm: '0 0 0 1pt var(--color-dark-800)',
      // },
      // borderColor: {
      //   'color-800': 'var(--color-dark-800)',
      // },
      colors: {
        dark: {
          100: 'var(--color-dark-100)',
          200: 'var(--color-dark-200)',
          300: 'var(--color-dark-300)',
          600: 'var(--color-dark-600)',
          700: 'var(--color-dark-700)',
          800: 'var(--color-dark-800)',
          900: 'var(--color-dark-900)',
        },
        accent: 'var(--color-accent)',
        brand: 'var(--color-brand)',
      },
      outline: {
        'no-chrome': 'none',
      },
      transitionTimingFunction: {
        'in-out-hard': 'cubic-bezier(.77, 0, .175, 1)',
      },
      transitionDuration: {
        400: '400ms',
      },
      keyframes: {
        breathe: {
          '0%, 100%': {
            boxShadow: '0 0 20px 2px var(--color-dark-100-translucent)',
            borderColor: 'var(--color-dark-300)',
          },
          '50%': {
            boxShadow: '0 0 20px 2px transparent',
            borderColor: 'var(--color-dark-700)',
          },
        },
      },
      animation: {
        'breathe-slow': 'breathe 5s infinite ease-in-out',
      },
    },
  },
};
