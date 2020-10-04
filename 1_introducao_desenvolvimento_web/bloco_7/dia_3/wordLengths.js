const assert = require('assert');
function wordLengths (word) {
  const newArray = [];
  word.forEach(element => {
    newArray.push(element.length);
  });
  return newArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);