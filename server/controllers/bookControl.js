const Book = require("../models/bookModel");

module.exports.getbooks = async (req, res, next) => {
  //const { page } = req.params;
  const books = await Book.find({});
  // console.log({Books});
  // res.status(200).send(`{"Books":${Books}}`);
  res.status(200).send(JSON.stringify(books));
};

module.exports.newBook = async (req, res, next) => {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(200).send({ message: "ADDED NEW Book!" });
  };
  
  module.exports.editBook = async (req, res, next) => {
    const { name } = req.params;
    const foundBook = await Book.findOneAndUpdate(
      { name: `${name}` },
      { ...req.body },
      { new: true }
    );
    if (!foundBook) {
      res.status(400).send({ message: "CANNOT FIND Book WITH THE ID" });
    }
    await foundBook.save();
    res.status(200).send({ message: "UPDATED Book DETAILS!" });
  };
  
  module.exports.deleteBook = async (req, res, next) => {
    const { name } = req.params;
    const deleteBook = await Book.findOneAndDelete({ name: `${name}` });
    if (!deleteBook) {
      res.status(400).send({ message: "CANNOT FIND THE Book WITH THE ID" });
    }
    res.status(200).send({ message: "DELETED Book FROM THE DATABASE!" });
  };
  