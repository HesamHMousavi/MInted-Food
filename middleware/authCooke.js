//Creates a Token for the Cooke if the are Authorised

const jwt = require("jsonwebtoken");

const authCooke = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json({ msg: "NO token, Access Denied" });
    try {
      const decoded = jwt.verify(token, process.env.COOKEJWTKEY);
      req.id = decoded.id;
    } catch (err) {
      return res.json(err.message);
    }
  } catch (err) {
    res.send(err);
  }
  next();
};
module.exports = authCooke;
