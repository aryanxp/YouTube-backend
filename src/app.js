const subscriber = require("./models/subscribers");
const { ObjectId } = require("mongodb");
const express = require("express");
const app = express();

//set json intendation to 2 spaces
app.set("json spaces", 2);

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Your code goes here

// This is default route for the app
app.get("/", (req, res) => {
  res.json("Hi, this is a YouTube subscriber counter project");
});

// This is the route for getting all the subscribers
app.get("/subscribers", async (req, res) => {
  try {
    const subscribers = await subscriber.find();
    // returns all subscribers in json format
    res.status(200).json(subscribers);
  } catch (err) {
    res.status(500).json({ error: "database invalid" });
  }
});

// This is the route for creating a new subscriber
// Since schema is already defined in the subscriber.js file, we don't need to define it here
app.post("/subscribers", async (req, res) => {
  // This code is for destructuring the request body into name and subscribedChannel
  const { name, subscribedChannel } = req.body;
  try {
    const user = new subscriber({
      name: name,
      subscribedChannel: subscribedChannel,
    });
    // This is the code for saving the user to the database
    await user.save();
    res.json({
      message: "User created successfully",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// This is the route for getting all subscribers names
app.get("/subscribers/names", async (req, res) => {
  try {
    // removes id and subscribedDate from the result and also __v
    const subscribers = await subscriber.find().select("-_id -subscribedDate -__v");
    res.status(200).json(subscribers);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// This is the route for getting a specific subscriber
app.get("/subscribers/:id", async (req, res) => {
  const id = req.params.id;
  // Check if the id is valid
  if (ObjectId.isValid(id) === false) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }
  try {
    // finds the subscriber with the given id and returns the result in json format
    const subscribers = await subscriber.find({ _id: id }).then((result) => {
      res.status(200).json(result);
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// This is the route for deleting a specific subscriber
app.delete("/subscribers/:id", async (req, res) => {
  const id = req.params.id;
  // Check if the id is valid
  if (ObjectId.isValid(id) === false) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }
  try {
    const subscribers = await subscriber
      .find()
      // deletes the subscriber with the given id
      .deleteOne({ _id: id })
      .then((result) => {
        res.status(200).json({ message: "Subscriber deleted" });
      });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// This is the route for updating a specific subscriber
app.patch("/subscribers/:id", async (req, res) => {
  const id = req.params.id;
  const updateObject = req.body;
  // checks if the id is valid
  if (ObjectId.isValid(id) === false) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }
  try {
    const subscribers = await subscriber
      // updates the subscriber with the given id and sets the updateObject
      .updateOne({ _id: id }, { $set: updateObject })
      .then((result) => {
        res
          .status(200)
          // n.modified is the number of documents modified
          .json({ message: "Subscriber updated", modified: result.nModified });
      });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = app;
