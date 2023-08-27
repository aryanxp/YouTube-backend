const express = require("express");
require("dotenv").config();
const app = require("./app.js");
const mongoose = require("mongoose");
const port = process.env.PORT;
//DID NOT USE USERNAMER IN PROCESS.ENV BECAUSE IT WAS USERNAME OF COMPUTER
const USERNAME = process.env.USER;
const PASSWORD = process.env.PASSWORD;

// Parse JSON bodies (as sent by API clients)
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const DATABASE_URL =
  "mongodb+srv://" +
  USERNAME +
  ":" +
  PASSWORD +
  "@cluster0.vikdii3.mongodb.net/" +
  "youtube?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));


// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`));
