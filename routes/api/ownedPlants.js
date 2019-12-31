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
  debugger
  OwnedPlant.find()
    .then(ownedPlants => {
      debugger
      res.json(ownedPlants);
    })
    .catch(err => {
      debugger
      res
        .status(404)
        .json({ errMsg: "There was an issue retreiving your plants" })
    });
      // ownedPlantsObj = {};
      // debugger
      // ownedPlants.forEach(ownedPlant => {
      //   ownedPlantsObj[ownedPlant.id] = {
      //     nickname: ownedPlant.nickname,
      //     plantId: ownedPlant.plantId
      //   }

      // })
    
  
})

// router.post("/")

module.exports = router;