const mongoose = require("mongoose");

const FriendSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  friend: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Friend = mongoose.model("Friend", FriendSchema);

module.exports = Friend;
