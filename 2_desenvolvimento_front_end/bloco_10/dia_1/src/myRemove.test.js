const { TestScheduler } = require('jest');
const myRemove = require('./myRemove');

describe('myRemove', () => {
  test('Check that the myRemove([1,2,3,4], 3) returns [1,2,3,4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Check that the myRemove([1,2,3,4], 3) not returns [1,2,3,4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Check if the array has not been change', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 1);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
  
  test('Check if the myRemove([1,2,3,4], 5) returns [1,2,3,4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  }); 
});