const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('myRemoveWithoutCopy', () => {
  
  test('Check if the myRemoveWithoutCopy([1,2,3,4], 3) return [1,2,4]', () => {
    expect(myRemoveWithoutCopy([1,2,3,4], 3)).toEqual([1,2,4]);
  });

  test('Check if the myRemoveWithoutCopy([1,2,3,4], 3) not return [1,2,3,4]', () => {
    expect(myRemoveWithoutCopy([1,2,3,4], 3)).not.toEqual([1,2,3,4]);
  });

  test('does not change the passed array', () => {
    const arr = [10, 20, 30, 40, 50, 60];
    myRemoveWithoutCopy(arr, 40);
    expect(arr).toEqual([10, 20, 30, 50, 60]);
  });

  test('Check if the myRemoveWithoutCopy([1,2,3,4], 5) returns [1,2,3,4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  }); 
});