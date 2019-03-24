module.exports = {
  env: {
    browser: true,

    es6: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-console': ['error'],
  },
};
