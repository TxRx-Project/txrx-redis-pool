module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      sourceType: 'module',
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['@typescript-eslint'],
    env : {
        node: true,
    },
};