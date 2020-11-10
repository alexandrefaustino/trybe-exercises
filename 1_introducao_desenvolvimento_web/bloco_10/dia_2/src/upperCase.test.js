const uppercase = require('./upperCase');

  it('should return a string uppercase', (done) => {
    const phrase = 'alexandre';
    uppercase(phrase, (msg) => {
      expect(msg).toBe('ALEXANDRE');
      done();
  });
});