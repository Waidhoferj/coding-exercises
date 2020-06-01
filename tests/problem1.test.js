let { sumInList } = require("../problem1.js");

test.skip("[10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17", () => {
  let list = [10, 15, 3, 7];
  let k = 17;
  expect(sumInList(list, k)).toBeTruthy();
});

test.skip("Tests negative values, should be false", () => {
  let list = [-1, -2, -3, -4, -5];
  let k = 9;
  expect(sumInList(list, k)).toBeFalsy();
});

test.skip("Test mix of positive and negative values, should be true", () => {
  let list = [1, 0, 3, 2, -1, 5, -6];
  let k = 0;
  expect(sumInList(list, k)).toBeTruthy();
});
