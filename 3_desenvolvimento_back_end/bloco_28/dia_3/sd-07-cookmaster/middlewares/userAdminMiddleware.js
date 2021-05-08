const service = require('../services/userService');
const { onlyAdmin, userNotFound } = require('../messages');

const userAdminMiddleware = async (request, response, next) => {
  const { email } = request.body;  
  
  const { role } = await service.findUserByEmail(email);
  
  if (!role) {
    return response.status(404).json({ message: userNotFound });
  }

  if (role !== 'admin') {
    return response.status(403).json({ message: onlyAdmin });
  }
    
  next();
};

module.exports = userAdminMiddleware;