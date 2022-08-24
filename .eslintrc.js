const path = require('path')

module.exports = {
  extends: [
    'standard',
    'plugin:react/recommended',
    'prettier'
  ],
  parser: 'babel-eslint',
  plugins: ['standard', 'promise', 'import', 'react', 'jsx-a11y'],
  env: {
    mocha: true,
    node: true,
    browser: true,
    es6: true,
    jquery: true
  },
  globals: {
    expect: false,
    jest: false
  },
  rules: {
    'import/extensions': 0,
    'no-useless-escape': 0,
    'no-useless-return': 0,
    camelcase: 0,
    'prefer-const': 1,
    'react/prop-types': [0],
    'no-multi-spaces': [2, { ignoreEOLComments: true }],
    'import/no-webpack-loader-syntax': 0,
    'no-use-before-define': [0],
    'no-duplicate-imports': 0,
    'react/no-deprecated': 0,
    semi: ['error', 'never'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/img-has-alt': [0],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: path.join(__dirname)
      }
    ]
  }
}
