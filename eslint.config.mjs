import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,astro}'],
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'simple-import-sort': eslintPluginSimpleImportSort,
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'off',

      // Auto-format and auto-sort imports according to AGENTS.md rules
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 1. Framework imports (astro, react)
            ['^astro', '^react'],
            // 2. Third-party libraries
            ['^@?\\w'],
            // 3. Absolute internal paths with aliases (~/...)
            ['^~/'],
            // 4. Relative imports (../, then ./)
            [
              '^\\.\\.(?!/?$)',
              '^\\.\\./?$',
              '^\\./(?=.*/)(?!/?$)',
              '^\\.(?!/?$)',
              '^\\./?$',
            ],
            // 5. Styles and assets
            ['^.+\\.?(css|scss|sass|less|styl|png|jpg|jpeg|gif|svg|webp|ico)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  {
    files: ['**/*.astro'],
    rules: {
      'prefer-const': 'off',
      '@typescript-eslint/consistent-type-imports': 'off',
    },
  },
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**'],
  },
  eslintConfigPrettier,
);
