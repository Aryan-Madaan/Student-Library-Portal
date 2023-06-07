const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const testStu = require("./testStudent.json");
const testBook = require("./testBooks.json");

const jsonParser = bodyParser.json();

app.get("/books", (req, res, next) => {
  res.send(testBook);
});

app.get("/students", (req, res, next) => {
  res.send(testStu);
});

app.post("/students", jsonParser, (req, res, next) => {
  testStu.students.push(req.body);
  res.send(testStu);
});

app.put("/students/:id", jsonParser, (req, res, next) => {
  const { id } = req.params;
  const idx = testStu.students.findIndex((e) => e.id === id);
  if (idx != -1) {
    testStu.students.splice(idx, 1, req.body);
  }
  res.send(testStu);
});

app.delete("/students/:id", (req, res, next) => {
  const { id } = req.params;
  const idx = testStu.students.findIndex((e) => e.id === id);
  if (idx != -1) {
    testStu.students.splice(idx, 1);
  }
  res.send(testStu);
});

app.listen(8080, () => {
  console.log("Listening to port 8080");
});
