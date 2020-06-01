let { trackSteps } = require("../problem12");

// There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.
// What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

test("Provided Example: N = 4, possible steps = [1,2]", () => {
  let numSteps = 4;
  let result = trackSteps(numSteps);
  expect(result).toBe(5);
});

test("Provided Example: N = 4, possible steps = [1,2,3,4]", () => {
  let numSteps = 4;
  let result = trackSteps(numSteps, [1, 2, 3, 4]);
  expect(result).toBe(8);
});

test("Provided Example: N = 1", () => {
  let numSteps = 1;
  let result = trackSteps(numSteps);
  expect(result).toBe(1);
});

test("Provided Example: N = 2", () => {
  let numSteps = 2;
  let result = trackSteps(numSteps);
  expect(result).toBe(2);
});

test("Provided Example: N = 2", () => {
  let numSteps = 2;
  let result = trackSteps(numSteps);
  expect(result).toBe(2);
});

test("Provided Example: N = 5, possible steps = [1,2,3,4]", () => {
  let numSteps = 5;
  let result = trackSteps(numSteps, [1, 2, 3, 4]);
  expect(result).toBe(15);
});
