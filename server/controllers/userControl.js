const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

module.exports.signup = async (req, res) => {
  const user = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    role: req.body.role,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  await user
    .save()
    .then(() => {
      res.status(200).send({
        message: "User Registered successfully",
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: err,
      });
    });
};

module.exports.signin = async (req, res) => {
  await User.findOne({
    email: req.body.email,
  })
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User Not found.",
        });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      //signing token with user id
      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.API_SECRET,
        {
          expiresIn: 86400,
        }
      );

      //responding to client request with user profile success message and  access token .
      res.status(200).send({
        user: {
          id: user._id,
          email: user.email,
          fullname: user.fullname,
        },
        message: "Login successfull!!",
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
};

module.exports.validateJWT = (req, res) => {
  if (!req.user) {
    res.status(403).send({
      message: "Invalid JWT",
    });
  }
  if (req.user === "admin") {
    res.status(200).send({
      message: "Welcome",
    });
  } else {
    res.status(403).send({
      message: "Unauthorized user",
    });
  }
};
