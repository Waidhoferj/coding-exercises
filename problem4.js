//cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

//Given cons implementation
function cons(a, b) {
  pair = (f) => f(a, b);
  return pair;
}

const car = (pair) => pair((a, b) => a);

const cdr = (pair) => pair((a, b) => b);

export default { car, cdr, cons };
