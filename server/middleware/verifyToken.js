const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

module.exports.verifyToken = async (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    await jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.API_SECRET,
      async (err, decode) => {
        if (err!=null || decode===null) {
          req.user = undefined;
          req.error = err;
        }
        else{
        await User.findOne({
          _id: decode.id,
        }).then((user) => {
            req.user = user.role;
        })
      }
        
      }
    );
    // next()
  }
  next()
  
};
