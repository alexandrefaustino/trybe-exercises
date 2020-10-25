const assert = require('assert');
function addAllnumbers (arr) {
  let total = 0;
  arr.forEach(element => {
    total += element
  });
  return total;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);