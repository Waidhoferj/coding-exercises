// Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

// For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

function findLongestDistinct(s, k) {
  if (!k) return "";
  let str = "";
  let result = "";
  let distinct = new Set();
  for (let index = 0; index < s.length; index++) {
    distinct.add(s[index]);
    if (distinct.size > k) {
      if (str.length > result.length) result = str;
      let i;
      for (i = 0; i < str.length; i++) {
        if (distinct.size === k) break;
        distinct.delete(str[i]);
      }
      str = str.slice(i);
    }
    str += s[index];
  }
  if (!result) result = str;
  return result;
}

export default findLongestDistinct;
