const Book = require('../models/Book');
const { bookValidation } = require('./../validations/bookValidation');
const sendResponse = require('./../constant/responseHelper');
const { STATUS_CODE, SUCCESS_MSG, ERRORS } = require('./../constant/index');


exports.createBook = async (req, res) => {
  const { error } = bookValidation(req.body);
  if (error) return sendResponse(res, STATUS_CODE.BAD_REQUEST, false, error.details[0].message);

  const book = new Book({
    user: req.user,
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    genre: req.body.genre,
    publishedYear: req.body.publishedYear,
  });

  try {
    const savedBook = await book.save();
    const books = await Book.find({ user: req.user });

    return sendResponse(res, STATUS_CODE.CREATED, true, SUCCESS_MSG.SUCCESS_MESSAGES.CREATED, books);

  } catch (err) {
    return sendResponse(res, STATUS_CODE.SERVER_ERROR, false, err.message, []);
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return sendResponse(res, STATUS_CODE.OK, true, SUCCESS_MSG.SUCCESS_MESSAGES.OPERATION_SUCCESSFULL, books);
  } catch (err) {
    return sendResponse(res, STATUS_CODE.SERVER_ERROR, false, err.message, []);
  }
};


exports.deleteAllBook = async (req, res) => {
  try {
    const deletedBook = await Book.findOneAndDelete();

    if (!deletedBook) {
      return sendResponse(res, STATUS_CODE.NOT_FOUND, false, ERRORS.COMMON.NOT_FOUND);
    }

    const books = await Book.find();

    return sendResponse(res, STATUS_CODE.OK, true, SUCCESS_MSG.SUCCESS_MESSAGES.DELETE, books);
  } catch (err) {
    return sendResponse(res, STATUS_CODE.SERVER_ERROR, false, err.message);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findOneAndDelete({ _id: req.params.id });

    if (!deletedBook) {
      return sendResponse(res, STATUS_CODE.NOT_FOUND, false, ERRORS.COMMON.NOT_FOUND);
    }

    const books = await Book.find({ user: req.user });

    return sendResponse(res, STATUS_CODE.OK, true, SUCCESS_MSG.SUCCESS_MESSAGES.DELETE, books);
  } catch (err) {
    return sendResponse(res, STATUS_CODE.SERVER_ERROR, false, err.message);
  }
};

exports.updateBook = async (req, res) => {
  const { error } = bookValidation(req.body);
  if (error) return sendResponse(res, STATUS_CODE.BAD_REQUEST, false, error.details[0].message);

  const { title, author, description, genre, publishedYear } = req.body;

  try {
    const updatedBook = await Book.findOneAndUpdate(
      { _id: req.params.id, user: req.user },
      { title, author, description, genre, publishedYear },
      { new: true }
    );

    if (!updatedBook) {
      return sendResponse(res, STATUS_CODE.NOT_FOUND, false, ERRORS.COMMON.NOT_FOUND);
    }

    const books = await Book.find({ user: req.user });
    return sendResponse(res, STATUS_CODE.OK, true, SUCCESS_MSG.SUCCESS_MESSAGES.UPDATE, books);
  } catch (err) {
    return sendResponse(res, STATUS_CODE.SERVER_ERROR, false, err.message);
  }
};
