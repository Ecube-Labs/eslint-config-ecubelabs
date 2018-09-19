module.exports = {
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
    },
    extends: 'airbnb-base',
    env: {
        // browser: true,
        node: true,
        mocha: true,
    },
    rules: {
        // maxlength: 0, // 0으로 설정하면 에러 검출 X
        'no-console': 'off', // 콘솔을 사용하기 위한 설정
        'indent': ['error', 4, {'SwitchCase': 1}],
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
        'guard-for-in': 0,
        'no-loop-func': 0,
        'no-use-before-define': ['error', {
            functions: false,
            classes: false,
            variables: true,
        }],
        'no-restricted-syntax': ["error", "WithStatement"],
        'newline-per-chained-call': 0,
    },
    plugins: ['import'],
};