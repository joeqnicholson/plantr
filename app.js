const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require("./config/key").mongoURI;
const plants = require("./routes/api/plants");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/plants", plants);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

