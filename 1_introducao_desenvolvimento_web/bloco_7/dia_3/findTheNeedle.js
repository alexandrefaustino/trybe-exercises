const assert = require('assert');
function findTheNeedle(words, word) {
  return words.indexOf(word);  
}


let words = ['house', 'train', 'slide', 'needle', 'book'];
findTheNeedle(words, 'train');
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);