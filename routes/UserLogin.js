const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
router.use(express.json());

router.post("/", async (req, res) => {
  const { password, Email } = req.body;
  const user = await User.findOne({ Email });
  if (!user) return res.send("Email and/or Password incorrect");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) res.send("Email and/or password incorrect");
  delete user.password;
  const payload = {
    id: user.id,
    type: "user",
  };
  jwt.sign(payload, process.env.jwtKey, { expiresIn: 3600 }, (err, token) => {
    if (err) throw err;
    res.json({ token });
  });
});
module.exports = router;
