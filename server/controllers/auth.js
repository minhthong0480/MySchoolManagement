// const { registerValid } = require("../validation");
// const { loginValid } = require("../validation");
const User = require("../model/User");
// const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//Register feature
const register = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  if (!name) return res.status(400).send("Name is required");
  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password is required and should be minumum 6 characters");
  const userExist = await User.findOne({ email }).exec();
  if (userExist) return res.status(400).send("Email is taken");
  //register
  const user = new User(req.body);
  try {
    await user.save();
    console.log("Save User succesfully", user);
    return res.json({ ok: true });
  } catch (error) {
    console.log("Create User failed", error);
    return res.status(400).send("Error. Try again");
  }
};

module.exports = { register };
