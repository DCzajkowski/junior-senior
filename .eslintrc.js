module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  globals: {
    module: true,
    process: true,
  },
  overrides: [
    {
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
      env: {
        browser: true,
      },
      files: ['src/**/*.{tsx,ts}'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        sourceType: 'module',
        useJSXTextNode: true,
      },
      settings: {
        propWrapperFunctions: ['forbidExtraProps'],
        react: {
          pragma: 'React',
          version: '17.0',
        },
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    curly: ['error', 'all'],
    'no-eval': 'error',
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        printWidth: 80,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
  },
}
