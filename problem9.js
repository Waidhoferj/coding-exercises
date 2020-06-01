//Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

function largestNaSum(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    let first = list[i] || 0;
    let second = list[i + 1] || 0;
    let third = list[i + 2] || 0;
    if (first >= second || third >= second) {
      sum += list[i];
      list[1] = 0;
      i++;
    } else {
      sum += list[i + 1];
      list[i + 2] = 0;
      i += 2;
    }
  }
  return sum;
}

module.exports = { largestNaSum };
