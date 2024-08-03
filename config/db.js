const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    const connectinString='mongodb+srv://asadnoman208:g49iynbSlQNIqBlD@bookcluster.ckq0cws.mongodb.net/book-management?retryWrites=true&w=majority'
    await mongoose.connect(connectinString, {
     autoIndex:true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
