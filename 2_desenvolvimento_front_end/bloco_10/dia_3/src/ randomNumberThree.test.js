let randomNumber = require('./ randomNumber');

test('randomNumber', () => {
  randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
  
  expect(randomNumber(1, 3, 6)).toBe(18);
  expect(randomNumber).toHaveBeenCalledWith(1, 3, 6);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);  

  randomNumber.mockReset();
  randomNumber = jest.fn().mockImplementationOnce(a => a * 2);

  expect(randomNumber(21)).toBe(42);
  expect(randomNumber).toHaveBeenCalledWith(21);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);  
});

