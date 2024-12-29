module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: '@{app,processes,pages,widgets,features,entities,shared}/**',
            group: 'internal',
            position: 'before'
          }
        ],
        'newlines-between': 'always'
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};