const express = require('express');

const router = express.Router();

const { userMiddleware, userAdminMiddleware } = require('../middlewares');
const { userSchema } = require('../schemas');
const { userController } = require('../controllers');

router.post('/users/admin', userAdminMiddleware, userController.createUser);

router.post('/users', userSchema, userMiddleware, userController.createUser);

module.exports = router;