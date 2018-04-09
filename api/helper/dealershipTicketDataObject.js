
const getTicketValue = require('./getTicketValue');
const dealershipBarCode = require('./dealershipBarCode');

const dealershipTicketDataObject = (typedNumber) => {
  return {
    ticketData: {
      value: getTicketValue(typedNumber),
      dueDate: `Not available`,
      barCode: dealershipBarCode(typedNumber),
    },
    error: null,
  }
}

module.exports = dealershipTicketDataObject;
