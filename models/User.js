const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  FirstName: {
    required: true,
    type: String,
    min: 3,
    max: 255,
  },
  LastName: {
    required: true,
    type: String,
    min: 3,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    password: true,
    min: 6,
    max: 255,
  },
  Email: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
    min: 11,
    max: 11,
  },
  Address: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  date: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema , "users");
