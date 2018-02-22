module.exports = {
  parser: require.resolve('babel-eslint'),
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier'
  ],
  plugins: ['import', 'react', 'jsx-a11y'],
  rules: {
    // Console statements are useful for debugging and should be stripped
    // from our production build automatically.
    'no-console': 0,
    // PropTypes validation does improve readability and understandability of
    // React components, but authoring and maintaining them everywhere is
    // unrealistic.
    'react/prop-types': 0,
    // By default jsx-a11y exptects form labels to wrap form elements 
    // and have an htmlFor props with an id. Because we are not wrapping 
    // the elements we only require the id here.
    "jsx-a11y/label-has-for": [ 2, {
      "components": [ "Label" ],
      "required": {
          "every": ["id" ]
      },
      "allowChildren": false
  }]
  }
}
