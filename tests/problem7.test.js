let { countDecodings } = require("../problem7");

test.skip("Provided Example", () => {
  let code = "111";
  expect(countDecodings(code)).toBe(3);
});

test("Cannot decode zeros", () => {
  let code = "000000";
  expect(countDecodings(code)).toBe(0);
});

test("For numbers over 2, there is only one decoding", () => {
  let code = "34554365667";
  expect(countDecodings(code)).toBe(1);
});

test("Online solution", () => {
  let code = "1234";
  expect(countDecodings(code)).toBe(3);
});
