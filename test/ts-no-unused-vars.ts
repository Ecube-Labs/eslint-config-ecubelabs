const testFn = (_test: (...args: any[]) => void) => {}; // 타입인 args가 걸리지 않으면 된다.

// FIXME: https://stackoverflow.com/questions/55807329/why-eslint-throws-no-unused-vars-for-typescript-interface 왜 난 해결이 안되지?
type AnyType = Record<string, unknown>;
interface AnyInterface {}
