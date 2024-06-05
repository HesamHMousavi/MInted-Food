const mongoose = require("mongoose");
const env = require("dotenv");
env.config();

const connectDB = () => {
  try {
    mongoose.connect(process.env.db, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected");
  } catch (err) {}
};

module.exports = connectDB;
