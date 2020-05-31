class TrieNode {
  constructor() {
    this.children = new Array(26).fill(null);
    this.endOfWord = false;
  }

  isEmpty() {
    return this.children.every((child) => child === null);
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let cur = this.root;
    for (let char of word) {
      let charCode = char.charCodeAt() - 97;
      if (!cur.children[charCode]) {
        cur.children[charCode] = new TrieNode();
      }
      cur = cur.children[charCode];
    }
    cur.endOfWord = true;
  }

  search(word) {
    let cur = this.root;
    let results = [];
    for (let char of word) {
      let charCode = char.charCodeAt() - 97;
      if (!cur) return [];
      cur = cur.children[charCode];
    }
    this.findWords(cur, word, results);
    return results;
  }

  findWords(node, word, results) {
    if (node.endOfWord) results.push(word);
    if (node.isEmpty()) return;
    for (let i = 0; i < 26; i++) {
      if (!node.children[i]) continue;
      this.findWords(
        node.children[i],
        word + String.fromCharCode(i + 97),
        results
      );
    }
  }
}

function autocomplete(prefix, words) {
  if (!prefix) return [];
  let trie = new Trie();
  words.forEach(trie.insert.bind(trie));
  return trie.search(prefix);
}
console.log("problem 11");

export default { autocomplete };
