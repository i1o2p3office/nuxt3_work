/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        'dialog-bg': 'rgba(0, 0, 0, 0.8)'
      },
      animation: {
        loading: 'loading .75s infinite ease-in-out',
        'dialog-nested': 'dialog-nested .3s ease-in-out'
      },
      keyframes: {
        loading: {
          '0%, 100%': { transform: 'scale(.1)' },
          '30%, 70%': { transform: 'scale(1)' }
        },
        'dialog-nested': {
          '0%': { opacity: 0, transform: 'translateY(-30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
}
