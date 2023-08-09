# 설치

## JavaScript

```bash
$ npm install eslint-config-ecubelabs prettier eslint -D
```

# 프로젝트에 적용

프로젝트 최상위 폴더에 다음과 같이 .eslintrc.js 파일을 추가합니다.

## JavaScript

```js
// eslintrc.js
module.exports = {
  root: true,
  extends: "ecubelabs",
  parserOptions: {
    ecmaVersion: 2018, // your project ECMAScript version
  },
};
```

## TypeScript

```js
// eslintrc.js
module.exports = {
  root: true,
  extends: ["ecubelabs", "ecubelabs/typescript"],
  parserOptions: {
    ecmaVersion: 2018, // your project ECMAScript version
    project: "./tsconfig.json",
  },
};
```
