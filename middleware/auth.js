const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json({ msg: "NO token, Access Denied" });
    try {
      const decoded = jwt.verify(token, process.env.jwtKey);
      req.id = decoded.id;
    } catch {
      return res.json({ err: "Token Expired" });
    }
  } catch (err) {
    res.send(err);
  }
  next();
};

module.exports = auth;
