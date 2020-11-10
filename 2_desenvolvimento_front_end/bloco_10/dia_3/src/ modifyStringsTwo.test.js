
const service = require('./ modifyStrings');

test('modifyString', () => {
  
  const spy = jest
  .spyOn(service, 'stringUpperCase')
  .mockImplementation(string => string.toLowerCase());
  
  expect(service.stringUpperCase('Casa')).toBe('casa');
  expect(service.stringUpperCase).toHaveBeenCalledWith('Casa');
  expect(service.stringUpperCase).toHaveBeenCalled();
  expect(service.stringUpperCase).toHaveBeenCalledTimes(1);

  service.stringUpperCase.mockRestore();
  expect(service.stringUpperCase('Casa')).toBe('CASA');  
});
