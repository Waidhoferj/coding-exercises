const { Point, getMinSteps } = require("../problem5");

test.skip("Given Example", () => {
  let start = new Point(0, 3);
  let end = new Point(0, 0);
  let board = [
    [false, false, false, false],
    [true, true, false, true],
    [false, false, false, false],
    [false, false, false, false],
  ];
  expect(getMinSteps(board, start, end)).toBe(7);
});
