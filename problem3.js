class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  toString() {
    let leftNode = this.left ? this.left.toString() : "";
    let rightNode = this.right ? this.right.toString() : "";
    return `${this.val},${leftNode},${rightNode}`;
  }
}

function serialize(root) {
  return root.toString();
}

function deserialize(string) {
  let nodes = string.split(",");
  let parse = () => {
    let val = nodes.shift();
    if (!val) return null;
    let node = new Node(val);
    node.left = parse();
    node.right = parse();
    return node;
  };
  return parse();
}

//First Pass: Break up the objects into tuples and then scan in each tuple recursively. It works but you have to iterate over the string many times. To make this function again, you'll have to change the Node.toString function to produce a description like this: ({val},{left},{right})
function deserializeAttempt(string) {
  if (!string) return null;
  let valEnd = string.indexOf(",");
  let val = string.slice(1, valEnd);
  let [left, right] = parseNodes(string, valEnd + 1);
  return new Node(val, deserialize(left), deserialize(right));
}

function parseNodes(string, start) {
  let nodes = [null, null];
  let hasLeftNode = string[start] === "(";
  if (hasLeftNode) {
    nodes[0] = parseNode(string, start);
    let rightStart = start + nodes[0].length + 2;
    let hasRightNode = string[rightStart] === "(";
    if (hasRightNode) nodes[1] = string.slice(rightStart, string.length - 1);
  } else {
    let hasRightNode = string.length > start + 1 && string[start + 1] === "(";
    if (hasRightNode) nodes[1] = string.slice(start + 1, string.length - 1);
  }
  return nodes;
}

function parseNode(string, start) {
  let opener = 0,
    closer = 0,
    i = start;
  do {
    if (string[i] === "(") opener++;
    else if (string[i] === ")") closer++;
    i++;
  } while (opener != closer);
  return string.slice(start, i);
}

export default { Node, serialize, deserialize };
