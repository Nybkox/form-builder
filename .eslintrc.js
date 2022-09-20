module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    'import/resolver': {
      jsconfig: {
        config: 'jsconfig.paths.json',
      },
    },
  },
  extends: ['airbnb', 'prettier', 'eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/display-name': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    'no-restricted-exports': 'off',
    'no-shadow': 'warn',
    'max-len': ['error', 120],
    'consistent-return': 'off',
    'no-unused-vars': 'warn',
    'react/button-has-type': 'warn',
    'no-underscore-dangle': 'off',
  },
};
