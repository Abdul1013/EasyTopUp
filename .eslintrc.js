module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['node_modules/', 'dist/', 'build/', 'coverage/'],
  overrides: [
    {
      files: ['*.config.js', 'metro.config.js', 'tailwind.config.js', 'babel.config.js'],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: 'script', // config files use CommonJS
      },
    },
  ],
};
