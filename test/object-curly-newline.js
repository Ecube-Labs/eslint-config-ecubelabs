const num = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
};

function foo() {
    const { one, two, three, four, five } = num;
    return { one, two, three, four, five };
}

console.log(foo()); // eslint-disable-line no-console

function bar() {
    const {
        one, two, three, four, five, six,
    } = num;
    return { one, two, three, four, five, six };
}

console.log(bar()); // eslint-disable-line no-console
