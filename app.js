const express = require("express");
const router = express.Router();
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const passport = require("passport");

// Import routes
const users = require("./routes/api/users");
const plants = require("./routes/api/plants");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// Middleware for body parser:
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes:
app.get("/", (req, res) => res.send("Hello World"));

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/plants", plants);

// Port settings
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));