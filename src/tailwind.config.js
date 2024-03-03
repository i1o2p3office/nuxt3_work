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
      animation: {
        loading: 'loading .75s infinite ease-in-out'
      },
      keyframes: {
        loading: {
          '0%, 100%': { transform: 'scale(.1)' },
          '30%, 70%': { transform: 'scale(1)' }
        }
      }
    }
  },
  plugins: []
}
