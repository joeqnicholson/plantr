const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validatePlantsInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.latinName = validText(data.latinName) ? data.latinName : '';
  data.water = validText(data.water) ? data.water : '';
  data.soil = validText(data.soil) ? data.soil : '';
  data.light = validText(data.light) ? data.light : '';
  data.misc = validText(data.misc) ? data.misc : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required."
  }

  if (Validator.isEmpty(data.latinName)) {
    errors.latinName = "Latin Name field is required."
  }

  if (Validator.isEmpty(data.frequency)) {
    errors.frequency = "Frequency field is required."
  }

  if (!Validator.isInt(data.frequency)) {
    errors.frequency = `${data.frequency} is not a valid Frequency.`
  }

  if (Validator.isInt(data.frequency, {min: 1})) {
    errors.frequency = "Frequency must be greater than 0.";
  }

  if (Validator.isEmpty(data.water)) {
    errors.water = "Water field is required."
  }

  if (Validator.isEmpty(data.soil)) {
    errors.soil = "Soil field is required."
  }

  if (Validator.isEmpty(data.light)) {
    errors.light = "Light field is required."
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};