const express = require("express");
const app = express();
app.use(express.json());
const Cooke = require("../models/Cooke");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

app.post("/", async (req, res) => {
  const { Email, password } = req.body;
  try {
    const cooke = await Cooke.findOne({ Email });
    if (!cooke) return res.send("Invalid Email and/or password");
    const isMatch = await bcrypt.compare(password, cooke.password);
    if (!isMatch) return res.send("Invalid Email and/or password");
    const payload = {
      id: cooke._id,
      type: "cooke"
    };
    await jwt.sign(
      payload,
      process.env.COOKEJWTKEY,
      { expiresIn: "90m" },
      (err, token) => {
        if (err) return res.send(err.message);
        res.json({ token });
      }
    );
  } catch (err) {
    res.send(err.message);
    console.log(err.message);
  }
});
module.exports = app;
