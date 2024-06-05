const express = require("express");
const router = express.Router();
const User = require("../models/User");
const auth = require("../middleware/auth");
router.use(express.json());
const joi = require("@hapi/joi");
const bcrypt = require("bcryptjs");

const userSchema = joi.object({
  FirstName: joi.string().min(3).max(255).required(),
  LastName: joi.string().min(3).max(255).required(),
  password: joi.string().min(6).max(255).required(),
  Email: joi.string().min(3).max(255).required().email(),
  Phone: joi.string().min(11).max(11).required(),
  Address: joi.string().min(3).max(255).required(),
  date: joi.string().min(3).max(255).required(),
  city: joi.string().min(3).max(255).required(),
  isCooke: joi.boolean(),
});

router.post("/", async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const { FirstName, LastName, password, Email, Phone, Address, date, city } =
      req.body;
    let user = await User.findOne({ Email });
    if (user) return res.json({ msg: "Email already exists" });
    user = new User({
      FirstName,
      LastName,
      password,
      Email,
      Phone,
      Address,
      city,
      date,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    res.json({ msg: "Registration Complete" }).status(201);
  } catch (err) {
    console.log(err);
    res.json({ err }).status(400);
  }
});

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.id);
  res.json(user);
  try {
  } catch (err) {
    res.json(err);
  }
});

router.put("/", auth, async (req, res) => {
  try {
    const oldEmail = req.body.oldUser.Email;
    const newEmail = req.body.newUser.Email;
    const { _id } = req.body.oldUser;
    const found = await User.findById(_id);
    if (!found) return res.json({ msg: "user not found" });
    if (newEmail !== oldEmail) {
      const isTaken = await User.findOne({ Email: newEmail });
      if (isTaken) return res.send("Email is Taken");
    }
    await User.findByIdAndUpdate(_id, req.body.newUser);
    res.send("Account Updated");
  } catch (err) {
    res.send("User Not Found");
  }
});

module.exports = router;
