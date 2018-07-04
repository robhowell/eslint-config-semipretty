// Based on "Your last ESLint config": https://medium.com/@netczuk/your-last-eslint-config-9e35bace2f99

module.exports = {
  extends: ['semistandard', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ]
  }
};
