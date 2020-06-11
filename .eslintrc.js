module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'no-shadow':'off',
    'consistent-return': 'off',
    'global-require': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.tsx', '.ts'] }],
    '@typescript-eslint/no-var-requires': 'off',
    'prefer-promise-reject-errors': 'off',
    'camelcase': 'off',
    '@typescript-eslint/camelcase': 'off',
    'max-len': ["error", { "code": 120 }],
    'import/extensions': [
       'error',
       'ignorePackages',
       {
         js: 'never',
         jsx: 'never',
         ts: 'never',
         tsx: 'never'
       }
    ]
 }
};


