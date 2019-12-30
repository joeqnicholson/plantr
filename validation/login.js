const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = validTextt(data.email) ? data.email : '';
  data.password = validTextt(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email field is required.';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required.';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required.';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}