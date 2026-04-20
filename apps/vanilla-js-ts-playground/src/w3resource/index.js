import { items } from "./items";

export const functions = {};
export const tests = [];
for (const item of items) {
  let { name, fn, executeTest } = item();
  functions[name] = fn;
  tests.push(executeTest);
}
