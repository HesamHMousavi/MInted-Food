const express = require("express");
const router = express.Router();
const axios = require("axios");
router.use(express.json());
const env = require("dotenv");

router.post("/", async (req, res) => {
  try {
    const { address } = req.body;
    const result = await axios.get(
      `https://api.ideal-postcodes.co.uk/v1/addresses?api_key=${process.env.addess_api_id}&q=${address}`
    );
    res.send(result.data);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
