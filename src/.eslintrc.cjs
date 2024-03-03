module.exports = {
  env: {
    browser: true,
    es2023: true
  },
  //'plugin:vue/vue3-recommended'
  extends: ['prettier'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    // 'vue/multi-word-component-names': 0,
    'prettier/prettier': 'error'
  }
  // overrides: [
  //   {
  //     files: [
  //       '**/pages/**/*.{js,ts,vue}',
  //       '**/layouts/**/*.{js,ts,vue}',
  //       '**/components/**/*.{js,ts,vue}',
  //       '**/components/*.{js,ts,vue}',
  //       '**/app.{js,ts,vue}',
  //       '**/error.{js,ts,vue}',
  //       '**/.*.js'
  //     ],
  //     rules: {
  //       'vue/multi-word-component-names': 0
  //     }
  //   }
  // ]
}
