const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Plant = require('../../models/Plant');
const validatePlantInput = require('../../validation/plants');

// router.get("/test", (req, res) => {
//     res.json({ msg: "This is the plant route" });
// });

// Plants Index
router.get("/", (req, res) => {
  Plant.find().then(plants => res.json(plants))
})

// Plants Show
router.get("/:plantId", (req, res) => {
  const id = req.params.plantId;
  Plant.findById(id)
    .then(plant => { res.json(plant) })
    .catch(err => res.status(404).json({ noPlantFound: "No plant found with this id" }))
})

module.exports = router;