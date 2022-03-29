module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'react'],
  parser: '@typescript-eslint/parser',
  extends: ['eslint-config-airbnb', 'plugin:react/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      excludedFiles: ['.eslintrc.js'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'react/jsx-one-expression-per-line': [0],
        'react/jsx-filename-extension': [0],
        'react/function-component-definition': [0],
        'import/extensions': [0],
        'import/prefer-default-export': [1],
        'import/no-unresolved': [0],
        'no-shadow': 'off',
        'no-undef': 'off',
        'sort-keys': ['error', 'asc'],
        'sort-imports': ['error', {
          allowSeparatedGroups: true,
        }],
      },
    },
  ],
};
