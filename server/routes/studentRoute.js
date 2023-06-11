const express = require("express");
const router = express.Router();
const student = require("../controllers/studentControl");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

router
  .route("/students")
  .get(student.getStudents)
  .post(jsonParser, student.newStudent);
router
  .route("/students/:id")
  .put(jsonParser, student.editStudent)
  .delete(student.deleteStudent);

module.exports = router;
