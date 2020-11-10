let {stringUpperCase, firstLetter, joinStrings} = require('./ modifyStrings');

test('modifyString', () => {
  stringUpperCase = jest.fn().mockImplementationOnce(string => string.toLowerCase());
  
  expect(stringUpperCase('Casa')).toBe('casa');
  expect(stringUpperCase).toHaveBeenCalledWith('Casa');
  expect(stringUpperCase).toHaveBeenCalled();
  expect(stringUpperCase).toHaveBeenCalledTimes(1);  

  firstLetter = jest.fn().mockImplementationOnce(string => string[string.length - 1]);
  
  expect(firstLetter('Casa')).toBe('a');
  expect(firstLetter).toHaveBeenCalledWith('Casa');
  expect(firstLetter).toHaveBeenCalled();
  expect(firstLetter).toHaveBeenCalledTimes(1);

  joinStrings = jest.fn().mockImplementationOnce((a, b, c) => a+b+c);
  
  expect(joinStrings('a', 'e', 'i')).toBe('aei');
  expect(joinStrings).toHaveBeenCalledWith('a', 'e', 'i');
  expect(joinStrings).toHaveBeenCalled();
  expect(joinStrings).toHaveBeenCalledTimes(1);
  
});