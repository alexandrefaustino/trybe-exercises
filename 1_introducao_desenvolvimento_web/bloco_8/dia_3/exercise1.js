    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

function flatten() {
  const newArray = arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
  return newArray;  
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);