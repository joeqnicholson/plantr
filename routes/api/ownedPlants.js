const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const OwnedPlant = require('../../models/OwnedPlant');
const validateOwnedPlantInput = require('../../validation/ownedPlants');

// router.get("/test", (req, res) => {
//   res.json({ msg: "This is the ownedPlants route" })
// })

router.get("/:userId", passport.authenticate('jwt', { session: false }),
  (req, res) => {
    OwnedPlant.find({userId: req.params.userId})
      .then(ownedPlants => {
        res.json(ownedPlants);
      })
      .catch(err => {
        res
          .status(404)
          .json({ errMsg: "There was an issue retreiving your plants" })
      });
  }
)

router.post("/:userId", passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    const nickname = req.body.nickname || ' ';
    
    let newOwnedPlant = {
      userId: req.params.userId,
      plantId: req.body.plantId,
      nickname: nickname
    }

    // Validate ownedPlant data
    const { errors, isValid } = validateOwnedPlantInput(newOwnedPlant);
    if (!isValid) {
      return res.status(400).json(errors)
    }

    newOwnedPlant = new OwnedPlant(newOwnedPlant)

    newOwnedPlant.save().then(ownedPlant => res.json(ownedPlant));
  }
)

router.patch("/:userId/:ownedPlantId", 
  passport.authenticate('jwt', { session: false }), 
  (req, res) => {

    const nickname = req.body.nickname || ' ';

    let updatedOwnedPlant = {
      userId: req.params.userId,
      plantId: req.body.plantId,
      nickname: nickname
    }

    // Validate ownedPlant data
    const { errors, isValid } = validateOwnedPlantInput(updatedOwnedPlant);
    if (!isValid) {
      return res.status(400).json(errors)
    }

    const targetOwnedPlant = { _id: req.params.ownedPlantId }
    OwnedPlant.updateOne(targetOwnedPlant, updatedOwnedPlant)
      .then(() => {
        res.json(updatedOwnedPlant)
      });
  }
)

module.exports = router;