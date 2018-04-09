
const Joi = require('joi');

const {
  inputValidationSchema,
} = require('./validationSchema/inputValidationSchema');
const barCodeTicket = require('../helper/barCodeTicket');

module.exports.getCheckBarCodeTicket = (req, res) => {
  const ticketTypedLine = req.query.ticketTypedLine;
  const ticketTypedLineObject = {
    ticketTypedLine,
  };
  const barCodeNumberValidation = Joi.validate(ticketTypedLineObject, inputValidationSchema);

  Promise
    .all([barCodeNumberValidation])
    .then((barCodeValidationResult) => {
      const barCodeResult = barCodeTicket(ticketTypedLine);
      
      if (!barCodeResult.error) {
        return res.status(200).send(barCodeResult);
      }
      return res.status(400).send(barCodeResult);

    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        result: null,
        error: `An error occurred in the application. ${err}`,
      });
    });
}

module.exports.postCheckBarCodeTicket = (req, res) => {
  const { ticketTypedLine } = req.body;
  const barCodeNumberValidation = Joi.validate(req.body, inputValidationSchema);

  Promise
    .all([barCodeNumberValidation])
    .then((barCodeValidationResult) => {
      const barCodeResult = barCodeTicket(ticketTypedLine);
      
      if (!barCodeResult.error) {
        return res.status(200).send(barCodeResult);
      }
      return res.status(400).send(barCodeResult);

    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        result: null,
        error: `An error occurred in the application. ${err}`,
      });
    });
}
