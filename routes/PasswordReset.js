const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
router.use(express.json());
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  const { Email } = req.body;
  const user = await User.findOne({ Email });
  if (!user) return res.send("Email Not Found");
  const secret = process.env.jwtKey + user.password;
  const payload = {
    id: user._id,
    Email: user.Email,
  };
  let link = "";
  jwt.sign(payload, secret, { expiresIn: "10m" }, async (err, token) => {
    if (err) console.log(err.message);
    link = `http://localhost:3000/api/users/passwordreset/${user._id}/${token}`;
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.Email, // generated ethereal user
        pass: process.env.Email_Password, // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "mousavi.hesam1234@gmail.com", // sender address
      to: Email, // list of receivers
      subject: "Password Reset", // Subject line
      html: `<div>
        <h1>Passwrord Reset</h1>
        <p>Reset Your Password : <a href = ${link}>Click Here To Change Password</a></p>
      </div>`,
    });
    nodemailer.getTestMessageUrl(info);
    res.send(link);
  });
});

const validateToken = (token, secret) => {
  try {
    const tkn = jwt.verify(token, secret);
    return true;
  } catch (err) {
    return err.message;
  }
};

router.get("/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  try {
    const user = await User.findById({ _id: id });
    if (!user) return res.send("User Not Found");
    const secret = process.env.jwtKey + user.password;
    const isValid = validateToken(token, secret);
    res.send(isValid);
  } catch (err) {
    res.send(err.message);
  }
});

router.post("/:id/:token", async (req, res) => {
  const { password } = req.body;
  const { id, token } = req.params;
  try {
    const user = await User.findById({ _id: id });
    if (!user) return res.send("User Not Found");
    const secret = process.env.jwtKey + user.password;
    const isValid = validateToken(token, secret);
    if (isValid === true) {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(password, salt);
      user.password = hashedPass;
      await User.findByIdAndUpdate(id, user);
      res.send("Password Updated");
    }
  } catch (err) {
    res.send(err.message);
  }
});
module.exports = router;
