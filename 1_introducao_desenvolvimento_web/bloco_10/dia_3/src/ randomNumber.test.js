let randomNumber = require('./ randomNumber');

test('randomNumber', () => {
  randomNumber = jest.fn().mockReturnValue(10);
  
  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);  
});

