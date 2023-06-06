const express = require("express");
const app = express();

const testStu = require("./testStudent.json");
const testBook = require("./testBooks.json");

app.get("/students", (req, res, next) => {
  res.send(testStu);
});

app.get("/books", (req, res, next) => {
  res.send(testBook);
});

app.listen(8080, () => {
  console.log("Listening to port 8080");
});
