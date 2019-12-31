const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Plant = require('../../models/Plant');
const validatePlantInput = require('../../validation/plants');

router.get("/test", (req, res) => {
    res.json({ msg: "This is the plant route" });
});

router.get("/", (req, res) => {
  res.json({ msg: "This is the plant index"});
  // Plant.all().then(plants => res.json(plants))
})

// router.get("/userId" (req, res) => {
//   res.json({ msg: "This is the user's garden"});
//   // 
// })

router.get("/:plantId", (req, res) => {
  res.json({ msg: "This is the plant show" })
  // Plant.findOne({ id: req.params.plantId })
  //   .then(plant => { res.json(plant) })
})

module.exports = router;