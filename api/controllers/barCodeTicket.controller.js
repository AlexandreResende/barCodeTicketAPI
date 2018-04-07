
const Joi = require('joi');

const {
  inputValidationSchema,
} = require('./validationSchema/inputValidationSchema');

module.exports.getCheckBarCodeTicket = (req, res) => {
  res.status(200).send({
    message: `Hello there`
  });
}

module.exports.postCheckBarCodeTicket = (req, res) => {
  res.status(200).send({
    message: `Hello there`
  });
}
