const { Node, serialize, deserialize } = require("../problem3");

test("Provided tree", () => {
  let tree = new Node(
    "root",
    new Node("left", new Node("left.left")),
    new Node("right")
  );
  let result = deserialize(serialize(tree));
  expect(result.left.left.val).toEqual("left.left");
});

test("Left leaning tree", () => {
  let tree = new Node(
    "root",
    new Node(
      "left",
      new Node(
        "left.left",
        new Node("left.left.left", null, new Node("left.left.left.right"))
      )
    )
  );
  let result = deserialize(serialize(tree));
  expect(result.left.left.left.right.val).toEqual("left.left.left.right");
});

test.skip("Right leaning tree", () => {
  let tree = new Node(
    "root",
    null,
    new Node(
      "right",
      null,
      new Node(
        "right.right",
        new Node("right.right.left"),
        new Node("right.right.right", new Node("right.right.right.left"), null)
      )
    )
  );
  let result = deserialize(serialize(tree));

  expect(result.right.right.right.left.val).toEqual("right.right.right.left");
});
