const userService = require('../service/user.service');
const jwt = require('../utils/jwt');

exports.register = async (req, res) => {
  try {
    const user = await userService.registerUser(req.body);
    const token = jwt.generateToken(user);
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await userService.loginUser(req.body.email, req.body.password);
    const token = jwt.generateToken(user);
    res.json({ user, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.profile = async (req, res) => {
  try {
    const user = await userService.getUserProfile(req.user.id);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const user = await userService.updateUserProfile(req.user.id, req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
