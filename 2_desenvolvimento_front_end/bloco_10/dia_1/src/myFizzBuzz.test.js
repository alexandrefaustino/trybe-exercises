const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz', () => {

  test("Check if myFizzBuzz(15) return 'fizzbuzz' ", () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test("Check if myFizzBuzz(9) return 'fizz' ", () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  test("Check if myFizzBuzz(35) return 'buzz' ", () => {
    expect(myFizzBuzz(35)).toBe('buzz');
  });

  test("Check if myFizzBuzz(1) return 1 ", () => {
    expect(myFizzBuzz(1)).toBe(1);
  });

  test('returns `false` if the argument is not a number', () => {
    expect(myFizzBuzz('ball')).toBeFalsy();
  });

});