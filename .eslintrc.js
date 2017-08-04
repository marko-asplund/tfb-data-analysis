module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
    'jquery': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'sourceType': 'module'
  },
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': [1, {'vars': 'all', 'args': 'after-used'}],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-console': ['warn']
  }
};
