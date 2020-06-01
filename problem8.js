class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function countUnival(tree) {
  if (!tree) return 0;
  let result = countUnivalHelper(tree);
  return Math.abs(result);
}

function countUnivalHelper(tree) {
  let { val, left, right } = tree;
  let isUnival;
  if (left === null && right === null) return 1;
  if (left === null || right === null) {
    let presentBranch = left ? left : right;
    let presentTrees = countUnival(presentBranch);
    isUnival = presentTrees > -1 && presentBranch.val === val;
    return isUnival ? presentTrees + 1 : -Math.abs(presentTrees);
  } else {
    let leftTrees = countUnival(left);
    let rightTrees = countUnival(right);
    isUnival =
      left.val === right.val &&
      left.val === val &&
      leftTrees > -1 &&
      rightTrees > -1;
    return isUnival
      ? leftTrees + rightTrees + 1
      : -Math.abs(leftTrees) - Math.abs(rightTrees);
  }
}

module.exports = { Node, countUnival };
