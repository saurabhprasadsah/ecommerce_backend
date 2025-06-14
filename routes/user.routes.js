const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const { authenticate } = require('../middleware/auth.middleware');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', authenticate, userController.profile);
router.put('/profile', authenticate, userController.updateProfile);

module.exports = router;
