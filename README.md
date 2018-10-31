# Install
```
> npx install-peerdeps eslint-config-ecubelabs --dev
```

# EcubeLabs JavaScript Style Guide() {
별도의 언급이 없으면 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) 를 준수합니다.

## [object-curly-newline](https://eslint.org/docs/rules/object-curly-newline)
```
// bad
const { one, two, three, four, five, six } = num;

// good
const {
    one, two, three, four, five, six,
} = num;

// good
const { one, two, three, four, five } = num;
```

# };
