const express = require("express");
const router = express.Router();
const { Thought } = require("../../models/Thought");

// Create a new reaction to a thought
router.post("/:thoughtId/reactions", async (req, res) => {
  const { reactionBody, username } = req.body;
  const { thoughtId } = req.params;
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      thoughtId,
      { $push: { reactions: { reactionBody, username } } },
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

// Update a reaction
router.put("/:thoughtId/reactions/:reactionId", async (req, res) => {
  const { reactionBody } = req.body;
  const { thoughtId, reactionId } = req.params;
  try {
    const thought = await Thought.findById(thoughtId);
    if (!thought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    const reaction = thought.reactions.id(reactionId);
    if (!reaction) {
      return res.status(404).json({ message: "Reaction not found" });
    }
    reaction.reactionBody = reactionBody;
    await thought.save();
    res.json(thought);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a reaction
router.delete("/:thoughtId/reactions/:reactionId", async (req, res) => {
  const { thoughtId, reactionId } = req.params;
  try {
    const thought = await Thought.findById(thoughtId);
    if (!thought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    const reaction = thought.reactions.id(reactionId);
    if (!reaction) {
      return res.status(404).json({ message: "Reaction not found" });
    }
    reaction.remove();
    await thought.save();
    res.json(thought);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
