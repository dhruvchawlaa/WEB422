// Setup
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

// Get
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// Get All
app.get("/api/items", (req, res) => {
  res.json({ message: "fetch all items" });
});

// Get One
app.get("/api/items/:id", (req, res) => {
  res.json({ message: `get user with identifier: ${req.params.id}` });
});

// Post
app.post("/api/items", (req, res) => {
  res.status(201).json({
    message: `add a new item: ${req.body.firstName} ${req.body.lastName}`,
  });
});

// Put
app.put("/api/items/:id", (req, res) => {
  res.json({
    message: `updated item with identifier: ${req.params.id} to ${req.body.firstName} ${req.body.lastName}`,
  });
});

// Delete
app.delete("/api/items/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `deleted user with identifier: ${req.params.id}` });
});

app.use((req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(HTTP_PORT, () => {
  console.log("Ready to handle requests on port " + HTTP_PORT);
});
