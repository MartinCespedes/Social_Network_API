const mongoose = require('mongoose');

const ReactionSchema = new mongoose.Schema({
    reaction: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    thought: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thought',
    },
  });

  const Reaction = mongoose.model('Reaction', ReactionSchema);

  module.exports = Reaction;