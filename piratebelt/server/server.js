// IMPORT DEPENDENCIES
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// INSTANTIATE EXPRESS SERVER
const app = express();
const PORT = 8000;

// SETUP MIDDLEWARE
require("./config/mongoose.config");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
//app.use(cors());

// CONNECT ROUTES
const pirateRoutes = require("./routes/pirate.route");
pirateRoutes(app);
const userRoutes = require("./routes/user.route");
userRoutes(app);

// START EXPRESS SERVER
app.listen(PORT, () => console.log(`EXPRESS RUNNING ON PORT ${PORT}`));
