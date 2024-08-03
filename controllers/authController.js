const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('./../validations/authValidation');
const sendResponse = require('./../constant/responseHelper');
const { STATUS_CODE, SUCCESS_MSG, ERRORS } = require('./../constant/index');

exports.register = async (req, res) => {
  // Validate data
  const { error } = registerValidation(req.body);
  if (error) return sendResponse(res, STATUS_CODE.BAD_REQUEST,false, error.details[0].message);

  // Check if user exists
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return sendResponse(res, STATUS_CODE.BAD_REQUEST,false, ERRORS.COMMON.EMAIL);

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create user
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    return sendResponse(res, STATUS_CODE.CREATED,true, SUCCESS_MSG.SUCCESS_MESSAGES.CREATED, savedUser);
  } catch (err) {
    return sendResponse(res, STATUS_CODE.SERVER_ERROR,false, err.message,[]);
  }
};

exports.login = async (req, res) => {
  // Validate data
  const { error } = loginValidation(req.body);
  if (error) return sendResponse(res, STATUS_CODE.BAD_REQUEST,false, error.details[0].message);

  // Check if user exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return sendResponse(res, STATUS_CODE.BAD_REQUEST,false, ERRORS.INVALID.INVALID_EMAIL);

  // Check password
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return sendResponse(res, STATUS_CODE.BAD_REQUEST,false, ERRORS.INVALID.INVALID_PASSWORD);

  // Create and return a token
  const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET);
  return sendResponse(res, STATUS_CODE.OK, true, SUCCESS_MSG.SUCCESS_MESSAGES.OPERATION_SUCCESSFULL, {auth_token:token});
};
