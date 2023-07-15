const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };

const BookSchema = new Schema(
  {
    name: {
        type : String,
        unique:true,
        required:true,
    },
    id: {
      type: Array,
      required: true,
    //   unique: true,
    },
    author: {
      type: String,
    //   unique: true,
      required: true,
    },
    Genre: {
      type: String,
    //   unique: true,
      required: true,
    },
    noOfBooks: {
        type: BigInt,
      //   unique: true,
        required: true,
      },
  },
  opts
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
