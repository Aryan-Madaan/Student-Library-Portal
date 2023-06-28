const Student = require("../models/studentModel");

module.exports.getStudents = async (req, res, next) => {
  //const { page } = req.params;
  const students = await Student.find({});
  // console.log({students});
  // res.status(200).send(`{"students":${students}}`);
  res.status(200).send(JSON.stringify(students));
};

module.exports.newStudent = async (req, res, next) => {
  const newStudent = new Student(req.body);
  await newStudent.save();
  res.status(200).send({ message: "ADDED NEW STUDENT!" });
};

module.exports.editStudent = async (req, res, next) => {
  const { id } = req.params;
  const foundStudent = await Student.findOneAndUpdate(
    { id: `${id}` },
    { ...req.body },
    { new: true }
  );
  if (!foundStudent) {
    res.status(400).send({ message: "CANNOT FIND STUDENT WITH THE ID" });
  }
  await foundStudent.save();
  res.status(200).send({ message: "UPDATED STUDENT DETAILS!" });
};

module.exports.deleteStudent = async (req, res, next) => {
  const { id } = req.params;
  const deleteStudent = await Student.findOneAndDelete({ id: `${id}` });
  if (!deleteStudent) {
    res.status(400).send({ message: "CANNOT FIND THE STUDENT WITH THE ID" });
  }
  res.status(200).send({ message: "DELETED STUDENT FROM THE DATABASE!" });
};
