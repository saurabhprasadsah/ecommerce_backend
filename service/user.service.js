const User = require('../models/userSchema');

exports.registerUser = async (data) => {
  const existing = await User.findOne({ email: data.email });
  if (existing) throw new Error('User already exists');
  const user = new User(data);
  return user.save();
};

exports.loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    throw new Error('Invalid credentials');
  }
  return user;
};

exports.getUserProfile = async (id) => {
  return User.findById(id).select('-password');
};

exports.updateUserProfile = async (id, data) => {
  return User.findByIdAndUpdate(id, data, { new: true }).select('-password');
};
