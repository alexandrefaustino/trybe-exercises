const sum = require('./sum');

describe('sum', () => {

  test('tests if the sum of 4 plus 5 is equal to 9', () => {
    expect(sum(4,5)).toBe(9);
  });

  test('tests if the sum of 0 plus 0 is equal to 0', () => {
    expect(sum(0,0)).toBe(0);
  })    
  
  test('tests if there is an error when passing a string as a parameter', () => {
    expect(() => {
      sum(4,"5");
    }).toThrow();
  });

  test('error message is "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  });  
});