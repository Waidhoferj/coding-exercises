let charMap = new Array(26);
for (let i = 0; i < 26; i++) {
  charMap[i] = String.fromCharCode(97 + i);
}

/**
 *
 * @param {*} string number string of possible letters
 * @returns all combinations of possible decodings
 */
function findDecodings(string) {
  return new Set([...decodeNext(string, "", 1), ...decodeNext(string, "", 2)]);
}

function decodeNext(string, decodedString, numCharacters) {
  let codeString = string.slice(0, numCharacters);
  if (!codeString) return [decodedString];
  let code = Number(codeString) - 1;
  if (code > 26) return [];
  let decoded = charMap[code];
  decodedString += decoded;
  let reducedString = string.slice(numCharacters);
  return [
    ...decodeNext(reducedString, decodedString, 1),
    ...decodeNext(reducedString, decodedString, 2),
  ];
}

function countDecodings(codeString) {
  let results = new Array(codeString.length + 1).fill(0);
  results[0] = 1;
  results[1] = 1;
  let singleDigitDecodable = (i) => codeString[i - 1] > "0";
  let twoDigitDecodable = (i) =>
    codeString[i - 2] == 1 ||
    (codeString[i - 2] == "2" && codeString[i - 1] < "7");
  let i;
  for (i = 2, end = codeString.length + 1; i < end; i++) {
    if (singleDigitDecodable(i)) results[i] += results[i - 1];
    if (twoDigitDecodable(i)) results[i] += results[i - 2];
  }
  return results[codeString.length];
}

module.exports = { countDecodings };
