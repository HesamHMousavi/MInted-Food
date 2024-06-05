const express = require("express");
const router = express.Router();
router.use(express.json());
const bcrypt = require("bcryptjs");
const Cooke = require("../models/Cooke");
const authCooke = require("../middleware/authCooke");

//Create new Cooke
router.post("/", async (req, res) => {
  console.log(req.body);
  const {
    cooke: { FirstName, LastName, Email, password, date, Address, city, Phone },
  } = req.body;
  try {
    //Check if the email is taken by another cooke in the dataabse
    let user = await Cooke.findOne({ Email });
    if (user) return res.send("Email Already Taken");
    user = new Cooke({
      FirstName,
      LastName,
      Email,
      password,
      Phone,
      date,
      Address,
      city,
    });
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    user.password = hashedPass;
    await user.save();
    res.send("Account Created");
  } catch (err) {
    res.send(err.message);
    console.log(err.message);
  }
});

//Update user Details
router.put("/", authCooke, async (req, res) => {
  try {
    const { id, cooke } = req.body;
    await Cooke.findByIdAndUpdate(id, cooke);
    res.send("user Updated");
  } catch (err) {
    res.send(err.message);
  }
});

// Veraify Cooke
router.get("/", authCooke, async (req, res) => {
  try {
    const cooke = await Cooke.findById(req.id)
      .select("-password")
      .select("-isSuspended")
      .select("-__v")
      .select("-isSuspended");
    if (!cooke) return res.send("User Not Found");
    res.send(cooke);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
