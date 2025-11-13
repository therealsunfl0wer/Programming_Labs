module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    // relax rules to avoid conflicts with existing legacy files
    'linebreak-style': 'off',
    strict: 'off',
    quotes: 'off',
  },
  ignorePatterns: ['node_modules/', 'Solutions/', '**/node_modules/', '.github/']
};
