const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const OwnedPlant = require('../../models/OwnedPlant');
const validateOwnedPlantInput = require('../../validation/ownedPlants');

// router.get("/test", (req, res) => {
//   res.json({ msg: "This is the ownedPlants route" })
// })

router.get("/:userId", (req, res) => {
  OwnedPlant.find({userId: req.params.userId})
    .then(ownedPlants => {
      res.json(ownedPlants);
    })
    .catch(err => {
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

router.post("/:userId", (req, res) => {
  const { errors, isValid } = validateOwnedPlantInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors)
  }

  debugger
  const nickname = req.body.nickname || ' ';

  const newOwnedPlant = new OwnedPlant({
    userId: req.body.userId,
    plantId: req.body.plantId,
    nickname: nickname
  })

  newOwnedPlant.save().then(ownedPlant => res.json(ownedPlant));
})

module.exports = router;