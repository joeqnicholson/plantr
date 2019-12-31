const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateOwnedPlantsInput(data) {
  let errors = {};

  data.userId = validText(data.userId) ? data.userId : '';
  data.plantId = validText(data.plantId) ? data.plantId : "";
  // data.nickname = validText(data.nickname) ? data.nickname : '';

  if (Validator.isEmpty(data.userId)) {
    errors.userId = "Missing userId key"
  }

  // if (!Validator.isInt(data.userId)) {
  //   errors.userId = "Invalid userId - must be an integer"
  // }

  if (Validator.isEmpty(data.plantId)) {
    errors.plantId = "Missing plantId key"
  }

  // if (!Validator.isInt(data.plantId)) {
  //   errors.plantId = "Invalid plantId - must be an integer"
  // }

  // if (Validator.isEmpty(data.nickname)) {
  //   errors.nickname = ""
  // }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};