module.exports = {
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    extends: [
        "airbnb-base",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:prettier/recommended",
        "prettier",
    ],
    env: {
        node: true, // 모든 프로젝트를 node 기반으로 돌리니 항상 허용.
        "jest/globals": true,
    },
    rules: {
        "global-require": 0,
        "no-bitwise": 0,
        "no-underscore-dangle": 0,
        "no-param-reassign": 0,
        "no-return-await": 0,
        "no-multi-assign": 0,
        "no-unused-expressions": 0,
        "no-throw-literal": 0,
        "no-plusplus": 0,
        "no-shadow": 0,
        "no-continue": 0,
        "guard-for-in": 0,
        "no-loop-func": 0,
        "no-use-before-define": [
            "error",
            {
                functions: false,
                classes: false,
                variables: true,
            },
        ],
        "no-restricted-syntax": ["error", "WithStatement"],
        "no-unused-vars": [
            "error",
            {
                varsIgnorePattern: "^_",
                argsIgnorePattern: "^_",
            },
        ],
        "max-classes-per-file": "off", // Domain model 정의할 때 하나의 에그리게잇에 포함되는 하위 엔티티를 하나의 파일에 선언하는 경우때문에 허용한다.
        "import/no-dynamic-require": 0,
        "import/order": ["error", { "newlines-between": "never" }],
        "import/prefer-default-export": "off",
        "prettier/prettier": "error",
    },
    // NOTE: plugin:import는 airbnb-base로부터 상속받는다.
    plugins: ["prettier", "jest"],
    settings: {
        "prettier/prettier": "error",
    },
};
