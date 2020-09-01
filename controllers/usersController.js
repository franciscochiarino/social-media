const User = require('../models/userSchema');
const createError = require('http-errors');

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json({ success: true, users });
  }
  catch(err) {
    next(err);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await (await User.findById(req.params.id)).populate('followers', '-__v');
    if (!user) throw createError(500);
    const publicFields = user.getPublicFields();
    res.json({ success: true, user: publicFields });
  }
  catch(err) {
    next(err);
  }
};

exports.postUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ success: true, user });
  }
  catch(err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) throw createError(404);
    res.json({ success: true, user });
  } catch(err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // Find user
    const user = await User.findOne({email}); // Populate?
    if (!user) throw createError(404);

    // Compare password
    const valid = await user.checkPassword(password);
    if (!valid) throw createError(403);

    // Authenticate
    const token = user.generateAuthToken();

    // Get public fields
    const publicFields = user.getPublicFields();

    // Attach token to cookie
    res.cookie('x-auth', token);
    
    // Return user
    res.json({ success: true, user: publicFields });
  }
  catch(err) {
    next(err);
  }
};