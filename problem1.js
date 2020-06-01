// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

function sumInList(list, sum) {
  let numSet = new Set();
  for (let i = 0; i < list.length; i++) {
    if (numSet.has(sum - list[i])) return true;
    else numSet.add(list[i]);
  }

  return false;
}

module.exports = { sumInList };
