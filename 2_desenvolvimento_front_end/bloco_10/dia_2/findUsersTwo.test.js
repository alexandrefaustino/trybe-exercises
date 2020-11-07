const {getUserName, findUserById} = require('./findUsers');

describe('getUserName - async/await', () => {

  describe('findUsers', () => {
    it('should return Paul using id 5 with parameter', async () => {
      expect.assertions(1);
      const response = await getUserName(5);
      expect(response).toBe('Paul');
    });
  });

  describe('when the user id does not exists', () => {
    it('should return erro if id not found', async () => {
      expect.assertions(1);
      try {
        await getUserName(1);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 1 not found.' })  
      }                
    });
  });
});

