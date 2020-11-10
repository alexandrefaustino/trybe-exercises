const obj1 = require('./objectComparison');
const obj2 = require('./objectComparison');
const obj3 = require('./objectComparison');

describe('objects', () => {
  test('compares if two objects are equal', () => {
    expect(obj1).toEqual(obj3);
  });

  test('compares if two objects are not equal', () => {
    expect(obj1).toEqual(obj2);
  });
});