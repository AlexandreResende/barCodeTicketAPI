
const Joi = require('joi');

const inputValidationSchema = {
  barCodeNumber: Joi.string().min(44).max(46).required(),
};

module.exports = inputValidationSchema;