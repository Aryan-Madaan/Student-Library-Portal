const express = require("express");
const router = express.Router();
const book = require("../controllers/bookControl");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

router
  .route("/books")
  .get(book.getBooks)
  .post(jsonParser, book.newBook);
router
  .route("/books/:name")
  .put(jsonParser, book.editBook)
  .delete(book.deleteBook);

module.exports = router;
