const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
// const User = require("../../models/User")
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.post('register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors)
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.email = 'Email already exists.';
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          userName: req.body.name,
          email: req.body.email,
          password: req.body.password
        })
      }
    })
})

router.post('/login', (req, res) => {
  const {errors, isValid } = validateLoginInput(req.body);
  
  if (!isValid) {
    return res.status(400).json(errors)
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        // Use the validations to send the error
        errors.email = 'User not found';
        return res.status(404).json(errors);
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            res.json({ msg: 'Success' });
          } else {
            // And here:
            errors.password = 'Incorrect password'
            return res.status(400).json(errors);
          }
        })
    })
})