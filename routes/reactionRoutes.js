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

  // create a new reaction //
router.post("/", (req, res) => {
    const reaction = new Reaction(req.body);
    reaction
      .save()
      .then((reaction) => res.json(reaction))
      .catch((err) => res.status(400).json({ error: err.message }));
  });


  // update an existing reaction //
router.put("/:id", (req, res) => {
    Reaction.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((reaction) => res.json(reaction))
      .catch((err) => res.status(400).json({ error: err.message }));
  });


  // delete a reaction //
router.delete("/:id", (req, res) => {
    Reaction.findByIdAndRemove(req.params.id)
      .then((reaction) => res.json({ message: "Reaction deleted." }))
      .catch((err) => res.status(400).json({ error: err.message }));
  });
  
  module.exports = router;


  