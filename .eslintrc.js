module.exports = {
  extends: [
    'standard',
    'standard-react',
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
  },
  plugins: [
    'standard',
    'promise',
  ],
  globals: {
    __DEV__: true,
    __PROD__: true,
    __TEST__: true,
  },
  rules: {
    'prefer-promise-reject-errors': ['error', {'allowEmptyReject': true}],
    'no-console': 1,
    'semi': 0,
    'no-multiple-empty-lines': 0,
    'space-in-parens': ['error', 'never'],
    'quotes': 0,
    'jsx-quotes': 0,
    'comma-dangle': 0,
    'no-unused-vars': 1,
    'react/jsx-no-undef': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1
  }
};
