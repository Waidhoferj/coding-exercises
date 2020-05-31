// You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a tile you can walk on.

// Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.

// For example, given the following board:

// [
//     [f, f, f, f],
//     [t, t, f, t],
//     [f, f, f, f],
//     [f, f, f, f],
// ]
// and start = (3, 0) (bottom left) and end = (0, 0) (top left), the minimum number of steps required to reach the end is 7, since we would need to go through, (1, 2) because there is a wall everywhere else on the second row.

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(p) {
    return this.x === p.x && this.y === p.y;
  }

  distance(p) {
    return Math.abs(this.x - p.x) + Math.abs(this.y - p.y);
  }
}

function getMinSteps(board, start, end) {
  let visit = (pos) => (board[pos.y][pos.x] = true);

  let printBoard = (pos) => {
    let printout = board.map((row) => row.map((col) => (col ? "H" : "_")));
    printout[pos.y][pos.x] = "@";
    printout[end.y][end.x] = "G";
    console.log(printout);
  };

  let isValidPosition = (pos) =>
    pos.x < board[0].length &&
    pos.x > -1 &&
    pos.y < board.length &&
    pos.y > -1 &&
    board[pos.y][pos.x] === false;

  let getPossibleMoves = (p) => {
    let moves = [
      new Point(p.x, p.y - 1),
      new Point(p.x, p.y + 1),
      new Point(p.x - 1, p.y),
      new Point(p.x + 1, p.y),
    ];
    let leastDistance = (a, b) => a.distance(end) - b.distance(end);
    return moves.filter(isValidPosition).sort(leastDistance);
  };

  let step = (pos, stepCount = 0) => {
    printBoard(pos);
    if (pos.equals(end)) return stepCount;
    visit(pos);
    let possibleMoves = getPossibleMoves(pos);
    for (let move of possibleMoves) {
      let result = step(move, stepCount + 1);
      if (result) return result;
    }
    return false;
  };

  return step(start);
}

export default { Point, getMinSteps };
