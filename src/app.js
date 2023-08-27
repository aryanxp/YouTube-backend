const subscriber = require("./models/subscribers");
const { ObjectId } = require("mongodb");
const express = require("express");
const app = express();

// Your code goes here

app.get("/", (req, res) => {
  res.json("Hi, this is a YouTube subscriber counter project");
});

app.get("/subscribers", async (req, res) => {
  try {
    const subscribers = await subscriber.find();
    res.status(200).json(subscribers);
  } catch (err) {
    res.status(500).json({ error: "database invalid" });
  }
});

app.post("/subscribers", async (req, res) => {
  const body = req.body;
  const result = await subscriber
    .create(body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

app.get("/subscribers/names", async (req, res) => {
  try {
    const subscribers = await subscriber.find().select("-_id -subscribedDate");
    res.status(200).json(subscribers);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/subscribers/:id", async (req, res) => {
  const id = req.params.id;
  if (ObjectId.isValid(id) === false) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }
  try {
    const subscribers = await subscriber.find({ _id: id }).then((result) => {
      res.status(200).json(result);
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/subscribers/:id", async (req, res) => {
  const id = req.params.id;
  if (ObjectId.isValid(id) === false) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }
  try {
    const subscribers = await subscriber
      .find()
      .deleteOne({ _id: id })
      .then((result) => {
        res.status(200).json({ message: "Subscriber deleted" });
      });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.patch("/subscribers/:id", async (req, res) => {
  const id = req.params.id;
  if (ObjectId.isValid(id) === false) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }
  const body = req.body;
  try {
    const subscribers = await subscriber
      .find()
      .updateOne({ _id: id }, body, { updated: True })
      .then((result) => {
        res.status(200).json(subscriber);
      });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = app;
