let { findLongestDistinct } = require("../problem13");

test("Provided Example", () => {
  let result = findLongestDistinct("abcba", 2);
  let expected = "bcb";
  expect(result).toBe(expected);
});

test("Provided Example with another bcb", () => {
  let result = findLongestDistinct("abcbbcba", 2);
  let expected = "bcbbcb";
  expect(result).toBe(expected);
});

test("All same character", () => {
  let result = findLongestDistinct("zzzzzzzzzzzzzzzzz", 2);
  let expected = "zzzzzzzzzzzzzzzzz";
  expect(result).toBe(expected);
});

test("k limit far exceeds string length", () => {
  let result = findLongestDistinct("basdwert", 100);
  let expected = "basdwert";
  expect(result).toBe(expected);
});

test("k = 0", () => {
  let result = findLongestDistinct("dfsaeqwrwert", 0);
  let expected = "";
  expect(result).toBe(expected);
});

test("k = 0", () => {
  let result = findLongestDistinct("qwertyfasfdfffuiojm/.'", 5);
  let expected = "yfasfdfff";
  expect(result).toBe(expected);
});
