const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, "Please provide the fullname"],
    },
    email: {
      type: String,
      unique: [true, "This email is already present in the database."],
      lowercase: true,
      required: [true, "email not provided"],
    },
    role: {
      type: String,
      enum: ["student", "admin"],
      required: [true, "Please specify a role"],
    },
    password: {
      type: String,
      required: true,
    },
    created: {
      type: Date,
      default: Date.now,
    },
  },
  opts
);

const User = mongoose.model("User", userSchema);
module.exports = User;
