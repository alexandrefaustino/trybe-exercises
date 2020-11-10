const assert = require('assert');
// escreva a função addOne aqui
function addOne(arr) {
  const newArray = []
  arr.forEach(element => {
    const increment = 1;
    newArray.push(element + increment);    
  });
  return newArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);


assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);