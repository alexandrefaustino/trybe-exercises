const getRepos = require('./getRepos');

it('gets a list of repositories names', () => {
  const page = 'https://api.github.com/users/tryber/repos';
  
  return getRepos(page)
    .then(response => {
      expect(response).not.toContain('sd-01-week4-5-project-todo-list')
      expect(response).not.toContain('sd-01-week4-5-project-meme-generator')
    });
});