const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// building the database in mongoose to caputre books from my api
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Array, required: true },
  synopsis: String,
  link: String,
  img: String,
  // date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
