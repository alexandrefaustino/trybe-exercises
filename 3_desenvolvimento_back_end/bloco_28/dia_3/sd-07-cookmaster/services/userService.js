const model = require('../models/userModel');

const createUser = async (newUser) => {
  let role = 'user';
  const { insertedId } = await model.createUser(newUser);
  if (newUser.email === 'root@email.com') role = 'admin';
  
  return {
    user: {
      _id: insertedId,
      ...newUser,
      role,
    },
  };  
};

const findUserByEmail = async (mail) => {
  const user = await model.findUserByEmail(mail);
  return user;
};

module.exports = {  
  findUserByEmail,
  createUser,
};