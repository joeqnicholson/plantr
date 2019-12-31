const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const OwnedPlant = require('../../models/OwnedPlant');
const validateOwnedPlantInput = require('../../validation/ownedPlants');

router.get("/test", (req, res) => {
  res.json({ msg: "This is the ownedPlants route" })
})

router.get("/:userId", (req, res) => {
  
})

module.exports = router;