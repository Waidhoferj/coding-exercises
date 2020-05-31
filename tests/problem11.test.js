let { autocomplete } = require("../problem11");

test.skip("Provided Example", () => {
  let prefix = "de";
  let words = ["dog", "deer", "deal"];
  let expected = ["deer", "deal"];
  expect(autocomplete(prefix, words).sort()).toEqual(expected.sort());
});
