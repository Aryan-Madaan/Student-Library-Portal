const Student = require("../models/studentModel");

const index = async (req, res, next) => {
  const students = await Student.find({});
  res.status(200).send(JSON.stringify(students));
};

const newStudent = async (req, res, next) => {
  const newStudent = new Student(req.body);
  await newStudent.save();
  res.status(200).send("ADDED NEW STUDENT!");
};

const editStudent = async (req, res, next) => {
  const { id } = req.params;
  const foundStudent = await Student.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true }
  );
  if (!foundStudent) {
    res.status(404).send("CANNOT FIND STUDENT WITH THE ID");
  }
  await foundStudent.save();
  res.status(200).send("UPDATED STUDENT DETAILS!");
};

const deleteStudent = async (req, res, next) => {
  const { id } = req.params;
  const deleteStudent = await Student.findByIdAndDelete(id);
  if (!deleteStudent) {
    res.status(404).send("CANNOT FIND THE STUDENT WITH THE ID");
  }
  res.status(200).send("DELETED STUDENT FROM THE DATABASE!");
};
