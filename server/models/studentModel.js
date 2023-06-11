const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };

const studentSchema = new Schema(
  {
    name: String,
    id: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phno: {
      type: String,
      unique: true,
      required: true,
    },
  },
  opts
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
