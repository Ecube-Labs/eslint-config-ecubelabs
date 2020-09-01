module.exports = {
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    extends: 'airbnb-base',
    env: {
        // browser: true,
        node: true,
        mocha: true,
    },
    rules: {
        'max-len': ['error', { code: 120, ignoreComments: true }],
        // see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
                ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
                ImportDeclaration: { minProperties: 6, multiline: true, consistent: true },
                ExportDeclaration: { minProperties: 6, multiline: true, consistent: true },
            },
        ],
        indent: ['error', 4, { SwitchCase: 1 }],
        'global-require': 0,
        'no-bitwise': 0,
        'no-underscore-dangle': 0,
        'no-param-reassign': 0,
        'no-return-await': 0,
        'no-multi-assign': 0,
        'no-unused-expressions': 0,
        'no-throw-literal': 0,
        'no-plusplus': 0,
        'no-shadow': 0,
        'no-continue': 0,
        'import/no-dynamic-require': 0,
        'import/order': ['error', { 'newlines-between': 'never' }],
        'guard-for-in': 0,
        'no-loop-func': 0,
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: false,
                variables: true,
            },
        ],
        'no-restricted-syntax': ['error', 'WithStatement'],
        'newline-per-chained-call': 0,
        'no-unused-vars': [
            'error',
            {
                varsIgnorePattern: '^_',
                argsIgnorePattern: '^_',
            },
        ],
        'import/prefer-default-export': 'off',
    },
    plugins: ['import'],
};
