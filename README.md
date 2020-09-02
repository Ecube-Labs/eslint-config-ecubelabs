# 설치
```
> npx install-peerdeps eslint-config-ecubelabs --dev
```

# 프로젝트에 적용
프로젝트 최상위 폴더에 다음과 같이 .eslintrc.js 파일을 추가합니다.
```
module.exports = {
    extends: 'ecubelabs',
};
```

# EcubeLabs JavaScript Style Guide() {
별도의 언급이 없으면 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) 를 준수합니다.

## [object-curly-newline](https://eslint.org/docs/rules/object-curly-newline)
```
const num = { one: 1, two: 2, three: 3, four: 4, five: 5 };

const ch = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd',
    e: 'e',
    f: 'f',
};

const { one, two, three, four, five } = num;

const {
    a, b, c, d, e, f,
} = ch;
```

## [do-not-prefer-default-export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md#importprefer-default-export)
```
// good1.js

// There is a default export.
export const foo = 'foo';
const bar = 'bar';
export default 'bar';
```
```
// good2.js

export const foo = 'foo';
```
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#modules--prefer-default-export) 는 default export 를 권고하고 있어서 그 규칙을 그대로 따랐지만 실제로 프로젝트에 적용해보니 모든 프로젝트에서 이 규칙을 예외처리하고 있어서 본 repo 에서도 규칙을 껐습니다.

# };
