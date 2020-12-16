module.exports = {
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    extends: [
        'airbnb-base',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:prettier/recommended',
        'prettier',
    ],
    env: {
        node: true, // 모든 프로젝트를 node 기반으로 돌리니 항상 허용.
        'jest/globals': true,
    },
    rules: {
        'global-require': 'off',
        'no-bitwise': 'off',
        'no-underscore-dangle': 'off',
        'no-param-reassign': 'off',
        'no-return-await': 'off',
        'no-multi-assign': 'off',
        'no-unused-expressions': 'off',
        'no-throw-literal': 'off',
        'no-plusplus': 'off',
        'no-shadow': 'off',
        'no-continue': 'off',
        'guard-for-in': 'off',
        'no-loop-func': 'off',
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: false,
                variables: true,
            },
        ],
        'no-restricted-syntax': ['error', 'WithStatement'],
        'no-unused-vars': [
            'error',
            {
                varsIgnorePattern: '^_',
                argsIgnorePattern: '^_',
            },
        ],
        'max-classes-per-file': 'off', // Domain model 정의할 때 하나의 에그리게잇에 포함되는 하위 엔티티를 하나의 파일에 선언하는 경우때문에 허용한다.
        'import/no-dynamic-require': 'off',
        'import/order': ['error', { 'newlines-between': 'never' }],
        'import/prefer-default-export': 'off',
        'prettier/prettier': 'error',
    },
    // NOTE: plugin:import는 airbnb-base로부터 상속받는다.
    plugins: ['prettier', 'jest'],
    settings: {
        'prettier/prettier': 'error',
    },
};
