const { Int32 } = require("bson");
const mongoose = require("mongoose");

const cookeSchema = mongoose.Schema({
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
  Email: {
    required: true,
    type: String,
    max: 255,
  },
  password: {
    required: true,
    password: true,
    type: String,
    max: 255,
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
  },
  city: {
    type: String,
    required: true,
  },
  TotalReviews: {
    type: Int32,
    default: 0,
  },
  AvgReviews: {
    type: Int32,
    default: 0,
  },
  isSuspended: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Cooke", cookeSchema, "Cookes");
