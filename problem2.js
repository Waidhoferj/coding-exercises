// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// function surroundingProduct(list) {
//   let listProduct = list.reduce((product, num) => (product *= num));
//   return list.map((num) => listProduct / num);
// }

function surroundingProduct(list) {
  let len = list.length;
  let prefix = new Array(len);
  prefix[0] = 1;
  let suffix = new Array(len);
  suffix[len - 1] = 1;
  let i;
  //Build prefix
  for (i = 1; i < len; i++) prefix[i] = prefix[i - 1] * list[i - 1];

  //build suffix
  for (i = len - 2; i >= 0; i--) suffix[i] = suffix[i + 1] * list[i + 1];

  let output = new Array(len);
  //combine prefix suffix
  for (i = 0; i < len; i++) output[i] = prefix[i] * suffix[i];
  return output;
}

export default surroundingProduct;
