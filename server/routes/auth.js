const router = require("express").Router();
const User = require("../model/User");

//controller
const { register } = require("../controllers/auth");

// router.get("/:message", showMessage)
router.post("/register", register);

module.exports = router;
