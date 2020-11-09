let randomNumber = require('./ randomNumber');

test('randomNumber', () => {
  randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
  
  expect(randomNumber(12, 4)).toBe(3);
  expect(randomNumber).toHaveBeenCalledWith(12, 4);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);  
});

