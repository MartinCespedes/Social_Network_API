const express = require("express");
const router = express.Router();
const { Thought } = require("../../models/Thought");

// Get all thoughts //
router.get("/", async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single thought by ID //
router.get("/:id", async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    res.json(thought);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new thought //
router.post("/", async (req, res) => {
  const thought = new Thought({
    text: req.body.text,
    author: req.body.author,
  });
  try {
    const savedThought = await thought.save();
    res.status(201).json(savedThought);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a thought //
router.patch("/:id", async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.id,
      { text: req.body.text },
      { new: true }
    );
    if (!updatedThought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    res.json(updatedThought);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a thought //
router.delete("/:id", async (req, res) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(req.params.id);
    if (!deletedThought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    res.json({ message: "Thought deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/:id/reactions", async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) {
      return res.status(404).json({ message: "Thought not found" });
    }

    thought.reactions.push({
      reactionBody: req.body.reactionBody,
      username: req.body.username,
    });

    const updatedThought = await thought.save();
    res.json(updatedThought);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
