# 설치

## JavaScript

```bash
$ npx install-peerdeps eslint-config-ecubelabs -D
```

## TypeScript

peerDependency는 선택적으로 제공할 수 없기 때문에 추가로 요구하는 의존성 모듈을 설치합니다.

```bash
$ npx install-peerdeps eslint-config-ecubelabs -D
$ npm i @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript -D
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
