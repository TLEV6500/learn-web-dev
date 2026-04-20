import { expect, test } from "bun:test";

/**
 *
 * @param {string} label
 * @param {(input: any)=>any} fn
 * @param {[expected: any, ...input: any[]][]} inputDataOrEquality A collection of input/output pairs. Output value can be "==" to check for equivalence
 * @returns {()=>void} a function for testing current item
 */
export function createFunctionTest(label, fn, inputDataOrEquality) {
  return () => {
    test(`Is ${label} correct?`, () => {
      let i = 0;
      let failMsg;
      for (let [expected, ...inputs] of inputDataOrEquality) {
        i++;
        failMsg = `Failed at input set ${i}: [${inputs}]`;
        if (typeof expected === "string" && expected.slice(null, 2) == "==") {
          const index =
            expected.length >= 3 ? Number(expected[expected.length - 1]) : 0;
          expect(fn(...inputs), failMsg).toEqual(inputs[index]);
        } else expect(fn(...inputs), failMsg).toStrictEqual(expected);
      }
    });
  };
}
