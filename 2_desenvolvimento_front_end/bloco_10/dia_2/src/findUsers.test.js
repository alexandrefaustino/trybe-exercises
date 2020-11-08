const {getUserName, findUserById} = require('./findUsers');

describe('getUserName - promise', () => {

  describe('findUsers', () => {
    it('should return Mark using id 4 with parameter', async () => {
      const response = await getUserName(4);
      expect(response).toBe('Mark');
    });
  });

  describe('when the user id does not exists', () => {
    it('should return erro if id not found', () => {
      expect.assertions(1);
      return getUserName(1).catch(error => 
        expect(error).toEqual({ error: 'User with 1 not found.' })  
      );    
    });
  });
});

