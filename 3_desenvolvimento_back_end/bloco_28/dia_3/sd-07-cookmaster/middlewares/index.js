const loginMiddleware = require('./loginMiddleware');
const recipeMiddleware = require('./recipeMiddleware');
const recipeIdMiddleware = require('./recipeIdMiddleware');
const userMiddleware = require('./userMiddleware');
const userAdminMiddleware = require('./userAdminMiddleware');

module.exports = {
  loginMiddleware,
  recipeMiddleware,
  recipeIdMiddleware,
  userMiddleware,
  userAdminMiddleware,
};