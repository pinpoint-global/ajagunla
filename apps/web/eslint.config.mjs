import coreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...coreWebVitals,
  ...nextTypescript,
  prettierRecommended,
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'avoid',
          bracketSameLine: true,
          bracketSpacing: true,
          singleQuote: true,
          trailingComma: 'es5',
          semi: true,
          jsxSingleQuote: false,
          printWidth: 100,
          tabWidth: 2,
          endOfLine: 'auto',
        },
        {
          usePrettierrc: true,
        },
      ],
    },
  },
];

export default eslintConfig;
