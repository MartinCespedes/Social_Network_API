const express = require("express");
const router = express.Router();
const Friend = require("../../models/Friend");

// get all friends
router.get("/", async (req, res) => {
  try {
    const friends = await Friend.find();
    return res.status(200).json({ friends });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// create a new friend
router.post("/", async (req, res) => {
  const { friendUsername, userId } = req.body;
  const newFriend = Friend.create({
    friendUsername,
    userId,
  });

  try {
    await newFriend.save();
    return res.status(201).json({ message: "Friend added!" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// delete a friend
router.delete("/:id", async (req, res) => {
  try {
    await Friend.findOneAndDelete(req.params.id);
    return res.status(200).json({ message: "Friend deleted." });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
