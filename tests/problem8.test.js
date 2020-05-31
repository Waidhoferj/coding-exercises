const { Node, countUnival } = require("../problem8.js");

test.skip("Online Example", () => {
  let tree = new Node(
    5,
    new Node(1, new Node(5), new Node(5)),
    new Node(5, null, new Node(5))
  );
  let result = countUnival(tree);
  let count = 4;
  expect.skip(result).toBe(count);

  tree = new Node(
    5,
    new Node(4, new Node(4), new Node(4)),
    new Node(5, null, new Node(5))
  );

  result = countUnival(tree);
  count = 5;
  expect(result).toBe(count);
});

test.skip("Left Leaning Tree", () => {
  let tree = new Node(
    1,
    new Node(1, new Node(1, new Node(1, new Node(1, null, new Node(1)))))
  );
  let result = countUnival(tree);
  let count = 6;
  expect(result).toBe(count);
});

test.skip("Right Leaning Tree", () => {
  let tree = new Node(
    1,
    null,
    new Node(
      1,
      null,
      new Node(1, null, new Node(1, null, new Node(1, new Node(1))))
    )
  );
  let result = countUnival(tree);
  let count = 6;
  expect(result).toBe(count);
});

test("Empty Tree", () => {
  let tree = null;
  let result = countUnival(tree);
  expect(result).toBe(0);
});

test.skip("Invalidated Right Leaning Tree", () => {
  let tree = new Node(
    1,
    null,
    new Node(
      1,
      null,
      new Node(
        1,
        null,
        new Node(1, null, new Node(1, new Node(1, new Node(2))))
      )
    )
  );
  let result = countUnival(tree);
  let count = 0;
  expect(result).toBe(count);
});
