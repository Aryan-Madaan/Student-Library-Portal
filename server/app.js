const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const bodyParser = require("body-parser");

const testStu = require("./testStudent.json");
const testBook = require("./testBooks.json");

const jsonParser = bodyParser.json();

app.get("/students", (req, res, next) => {
  res.status(200).send(testStu);
});

app.post("/students", jsonParser, (req, res, next) => {
  testStu.students.push(req.body);
  res.status(200).send(req.body);
});

app.put("/students/:id", jsonParser, (req, res, next) => {
  const { id } = req.params;
  const idx = testStu.students.findIndex((e) => e.id === id);
  if (idx != -1) {
    testStu.students.splice(idx, 1, req.body);
  } else {
    res.status(404).send("CANNOT FIND THE STUDENT");
  }
  res.status(200).send(testStu);
});

app.delete("/students/:id", (req, res, next) => {
  const { id } = req.params;
  const idx = testStu.students.findIndex((e) => e.id === id);
  if (idx != -1) {
    testStu.students.splice(idx, 1);
  } else {
    res.status(404).send("CANNOT FIND THE STUDENT");
  }
  res.status(200).send(testStu);
});

// app.get("/books", (req, res, next) => {
//   res.send(testBook);
// });

// app.post("/books", jsonParser, (req, res, next) => {
//   testBook.books.push(req.body);
//   res.send(testBook);
// });

// app.put("/books/:id", jsonParser, (req, res, next) => {
//   const { id } = req.params;
//   const idx = testBook.books.findIndex((e) => e.id === id);
//   if (idx != -1) {
//     testBook.books.splice(idx, 1, req.body);
//   }
//   res.send(testBook);
// });

// app.delete("/books/:id", (req, res, next) => {
//   const { id } = req.params;
//   const idx = testBook.books.findIndex((e) => e.id === id);
//   if (idx != -1) {
//     testBook.books.splice(idx, 1);
//   }
//   res.send(testBook);
// });

app.listen(8080, () => {
  console.log("Listening to port 8080");
});
