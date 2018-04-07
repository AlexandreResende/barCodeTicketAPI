
const Joi = require('joi');

const inputValidationSchema = {
  barCodeNumber: Joi.string().min(47).max(48).required(),
};

module.exports = inputValidationSchema;