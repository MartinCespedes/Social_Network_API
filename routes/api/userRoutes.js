const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const getUser = require("../../utils/getUser");

// Get all users //
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single user by ID //
router.get("/:id", getUser, (req, res) => {
  res.json(res.user);
});

// Create a new user //
router.post("/", async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a user //
router.patch("/:id", getUser, async (req, res) => {
  const update = {
    username: req.body.username,
    email: req.body.email,
  };
  try {
    let doc = await User.findOneAndUpdate(req.params.id, update, { new: true });
    res.status(200).json(doc);
  } catch {
    res.status(400).json({ message: "No user found with this id" });
  }
});

// Delete a user //
router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted This User" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
