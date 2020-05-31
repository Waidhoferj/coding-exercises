const { car, cdr, cons } = require("../problem4");

test.skip("Provided Example car", () => {
  expect(car(cons(3, 4))).toBe(3);
});

test.skip("Provided Example cdr", () => {
  expect(cdr(cons(3, 4))).toBe(4);
});
