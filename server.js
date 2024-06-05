const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./db");

//Connecting to the databse
connectDB();

//User login route
app.use("/api/users", require("./routes/users"));
app.use("/api/address", require("./routes/Address"));
app.use("/api/users/login", require("./routes/UserLogin"));
app.use("/api/users/passwordreset", require("./routes/PasswordReset"));
app.use("/api/cookes", require("./routes/Cookes.js"));
app.use("/api/cookes/login", require("./routes/CookeLogin"));

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
