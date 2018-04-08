
const Joi = require('joi');

const {
  inputValidationSchema,
} = require('./validationSchema/inputValidationSchema');

module.exports.getCheckBarCodeTicket = (req, res) => {
  const barCodeNumber = {
    barCodeNumber: req.query.barCodeNumber,
  };
  res.status(200).send({
    message: `Hello there`
  });
}

module.exports.postCheckBarCodeTicket = (req, res) => {
  const { barCodeNumber } = req.body;
  const barCodeNumberValidation = Joi.validate(barCodeNumber, inputValidationSchema);

  Promise
    .all([barCodeNumberValidation])
    .then((barCodeValidationResult) => {
      res.status(200).send({
        result: `Worked`,
        error: null,
      });
    })
    .catch((err) => {
      res.status(500).send({
        result: null,
        error: `An error occurred in the application. ${err}`,
      });
    });
}
