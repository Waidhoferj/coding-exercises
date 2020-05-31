let surroundingProduct = require("../problem2");

test.skip("basic example from problem : [1, 2, 3, 4, 5] -> [120, 60, 40, 30, 24]", () => {
  let input = [1, 2, 3, 4, 5];
  let output = [120, 60, 40, 30, 24];
  expect(surroundingProduct(input)).toEqual(output);
});

test.skip("basic example from problem : [3, 2, 1] -> [2, 3, 6].", () => {
  let input = [3, 2, 1];
  let output = [2, 3, 6];
  expect(surroundingProduct(input)).toEqual(output);
});
