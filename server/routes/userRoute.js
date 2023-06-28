const express = require("express");
const router = express.Router();
const users = require("../controllers/userControl");
const { verifyToken } = require("../middleware/verifyToken");

router.route("/register").post(users.signup);

router.route("/login").post(users.signin);

router.route("/hiddencontent").get(verifyToken, users.validateJWT);

module.exports = router;
