module.exports = {
    extends: ['plugin:import/typescript', 'prettier/@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],

        /**
         * Overrides that the `index.js` rules
         */
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
            { typedefs: false, functions: false, classes: false, variables: true },
        ],
        // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
            },
        },
    },
};
