"use strict";
import { createFunctionTest } from "./test";

/**
 *  1/265
    Write a JavaScript function to check whether an `input` is an array or not.

    Example Test:
    ```js
    console.log(is_array('w3resource')); // false
    console.log(is_array([1, 2, 4, 0])); // true
    ```
    @returns {[fn:(...)=>any, executeTest: ()=>void]}
 */
function item1() {
  function is_array(arr) {
    return Array.isArray(arr);
  }

  const inputData = [
    [false, "w3resource"],
    [true, [1, 2, 4, 0]],
  ];

  return [is_array, createFunctionTest("item1", is_array, inputData)];
}

/**
 *  2/265
 Write a JavaScript function to clone an array.

    Example Test:
    ```js
        console.log(array_Clone([1, 2, 4, 0])); // [1, 2, 4, 0]
        console.log(array_Clone([1, 2, [4, 0]])); // [1, 2, [4, 0]]
    ```
    @returns {[fn:(...)=>any, executeTest: ()=>void]}
 */
function item2() {
  function array_clone(arr) {
    const newArr = [];
    for (let item of arr) {
      newArr.push(Array.isArray(item) ? array_clone(item) : item);
    }
    return newArr;
  }
  const testData = [
    ["==", [1, 2, 4, 0]],
    ["==", [1, 2, [4, 0]]],
  ];
  return [array_clone, createFunctionTest("item2", array_clone, testData)];
}

/**
 *  3/265
 Write a JavaScript function to get the first element of an array. Passing the parameter `n` will return the first `n` elements of the array.

    Example Test:
    ```js
    console.log(first([7, 9, 0, -2])); // 7
    console.log(first([],3)); // []
    console.log(first([7, 9, 0, -2],3)); // [7, 9, 0]
    console.log(first([7, 9, 0, -2],6)); // [7, 9, 0, -2]
    console.log(first([7, 9, 0, -2],-3)); // []
    ```
    @returns {[fn:(...)=>any, executeTest: ()=>void]}
 */
function item3() {
  /**
   *
   * @param {number[]} arr
   * @param {number} [firstN]
   * @returns {number[] | number} The first `n` elements or just the first one.
   */
  function first(arr, firstN) {
    if (firstN >= 0) {
      return arr.slice(null, firstN);
    } else if (firstN < 0) {
      return [];
    } else return arr[0];
  }
  const testData = [
    [7, [7, 9, 0, -2], undefined],
    [[], [], 3],
    [[7, 9, 0], [7, 9, 0, -2], 3],
    [[7, 9, 0, -2], [7, 9, 0, -2], 6],
    [[], [7, 9, 0, -2], -3],
  ];
  return [first, createFunctionTest("item3", first, testData)];
}

/**
 *  4/265
 Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

    Example Test:
    ```js
    console.log(last([7, 9, 0, -2])); // -2
    console.log(last([7, 9, 0, -2],3)); // [9, 0, -2]
    console.log(last([7, 9, 0, -2],6)); // [7, 9, 0, -2]
    ```
    @returns {[fn:(...)=>any, executeTest: ()=>void]}
 */
function item4() {
  /**
   *
   * @param {number[]} arr
   * @param {number} [lastN]
   * @returns {number[] | number} The last `n` elements or just the first one.
   */
  function last(arr, lastN) {
    return typeof lastN === "number" ? arr.slice(-lastN) : arr[arr.length - 1];
  }
  const testData = [
    [-2, [7, 9, 0, -2], undefined],
    [[9, 0, -2], [7, 9, 0, -2], 3],
    [[7, 9, 0, -2], [7, 9, 0, -2], 6],
  ];
  return [last, createFunctionTest("item4", last, testData)];
}

export const items = [item1, item2, item3, item4];
