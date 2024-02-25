module.exports = {
  env: {
    browser: true,
    es2023: true
  },
  extends: ['prettier', 'plugin:prettier/recommended', 'plugin:vue/vue3-recommended', 'plugin:nuxt/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'vue/multi-word-component-names': 0,
    'prettier/prettier': 'error'
  }
}
