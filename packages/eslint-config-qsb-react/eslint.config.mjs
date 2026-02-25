import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import ts from 'typescript-eslint'
import react from '@eslint-react/eslint-plugin'

export default defineConfig([
  { name: 'global-ignores', ignores: ['**/dist/**', '**/build/**', '**/out/**'] },
  {
    name: 'js/setup',
    languageOptions: { globals: { ...globals.browser, ...globals.node, ...globals.serviceworker } },
  },
  {
    name: 'js/rules',
    rules: {
      ...js.configs.recommended.rules,
      // override
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-empty-pattern': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-unused-expressions': 'warn',
    },
  },
  { name: 'ts/setup', plugins: { '@typescript-eslint': ts.plugin } },
  {
    name: 'ts/parser',
    files: ['**/*.?([cm])ts?(x)'],
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        sourceType: 'module',
      },
    },
  },
  {
    name: 'ts/rules',
    files: ['**/*.?([cm])ts?(x)'],
    rules: {
      ...ts.configs.eslintRecommended.rules,

      'no-var': 'off',
      'prefer-const': 'off',
      'prefer-rest-params': 'off',
      'prefer-spread': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-array-constructor': 'off',
      '@typescript-eslint/no-array-constructor': 'error',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-unnecessary-type-constraint': 'error',
      '@typescript-eslint/no-unsafe-declaration-merging': 'error',
      '@typescript-eslint/no-unsafe-function-type': 'error',
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-wrapper-object-types': 'error',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  { name: 'react/setup', plugins: { react, 'react-hooks': reactHooks } },
  {
    name: 'react/rules',
    files: ['**/*.?([cm])[jt]s?(x)'],
    rules: {
      'react/jsx-no-duplicate-props': 'error',
      'react/no-access-state-in-setstate': 'error',
      'react/no-component-will-mount': 'error',
      'react/no-component-will-update': 'error',
      'react/no-component-will-receive-props': 'error',
      'react/no-create-ref': 'error',
      'react/no-default-props': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-missing-key': 'error',
      'react/no-nested-component-definitions': 'error',
      'react/no-nested-lazy-component-declarations': 'error',
      'react/no-prop-types': 'error',
      'react/no-redundant-should-component-update': 'error',
      'react/no-unnecessary-use-prefix': 'warn',
      'react/no-unused-class-component-members': 'warn',

      // Rules of Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      sourceType: 'module',
    },
  },
])
