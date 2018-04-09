
const Joi = require('joi');

module.exports.inputValidationSchema = {
  ticketTypedLine: Joi.string().min(47).max(48).required(),
};
