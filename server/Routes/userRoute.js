const express = require("express");
const router = express.Router();
const User = require("../Models/userModel");
//Now lets create some routes
//this is our post route for storing our user in our database
router.post("/new", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const saveNewUser = await newUser.save();
    res.status(200).json(saveNewUser);
  } catch (err) {
    res.send({ message: "Cannot save User" });
  }
});
//This is our Login router
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({ message: "Please fill all fields" });
  }
  User.findOne({
    email: email,
    password: password,
  }).then((user) => {
    if (!user) {
      return res.status(404).send({ message: "No user found" });
    } else {
      return res.status(200).send({ message: "User found" });
    }
  });
});
router.get("/all", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.send({ message: err });
  }
});
module.exports = router;
