const { largestNaSum } = require("../problem9");

test.skip("Provided Examples", () => {
  let input = [2, 4, 6, 2, 5];
  let output = 13;
  expect(largestNaSum(input)).toEqual(output);

  input = [5, 1, 1, 5];
  output = 10;
  expect(largestNaSum(input)).toEqual(output);
});

test("Made up forced fail", () => {
  let input = [0, 6, 0, 6, 128, 0, 0, 256];
  let output = 390;
  expect(largestNaSum(input)).toEqual(output);
});

test("Negative numbers", () => {
  let input = [0, -6, 0, -6, 128, 0, 0, 256];
  let output = 384;
  expect(largestNaSum(input)).toEqual(output);
});

//i = 0
//compare first 3
//i = 0 or i = 1
//set next to 0
