const express = require("express");
const router = express.Router();
const Reaction = require("../models/Reaction");


// get all reactions //
router.get("/", (req, res) => {
    Reaction.find()
      .then((reactions) => res.json(reactions))
      .catch((err) => res.status(400).json({ error: err.message }));
  });
  
  // get reaction by id //
  router.get("/:id", (req, res) => {
    Reaction.findById(req.params.id)
      .then((reaction) => {
        if (!reaction) res.status(404).json({ message: "Reaction not found." });
        res.json(reaction);
      })
      .catch((err) => res.status(400).json({ error: err.message }));
  });