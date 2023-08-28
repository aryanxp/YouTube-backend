const express = require("express");
require("dotenv").config();
const app = require("./app.js");
const mongoose = require("mongoose");
// 3000 is the default port and custom port is fetched from .env
const port = process.env.PORT || 3000;
// MONGODB_URI fetched from .env file
const MONGODB_URI = process.env.MONGODB_URI;
// Connect to DATABASE
const DATABASE_URL = MONGODB_URI;

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`));
