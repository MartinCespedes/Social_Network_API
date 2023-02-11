const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all users //
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single user by ID //
router.get('/:id', getUser, (req, res) => {
  res.json(res.user);
});