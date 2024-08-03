const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
  genre: { type: String },
  publishedYear: { type: Number }
});

module.exports = mongoose.model('Book', BookSchema);
