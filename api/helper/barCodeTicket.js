
const ticketType = require('./ticketType');
const validateTicket = require('./validateCheckerDigit');
const bankTicketDataObject = require('./bankTicketDataObject');
const dealershipTicketDataObject = require('./dealershipTicketDataObject');

const barCodeTicket = (barCodeNumber) => {
  const ticketTypeName = ticketType(barCodeNumber);
  const ticketValidation = validateTicket(barCodeNumber);
  const invalidTicket = {
    ticketData: null,
    error: `Ticket not valid`,
  };

  if (ticketTypeName === 'bank') {
    const bankTicketValidationResult = validateTicket(barCodeNumber);

    if (bankTicketValidationResult) {
      return bankTicketDataObject(barCodeNumber);
    }

  } else if (ticketTypeName === 'dealership') {
    const dealershipTicketValidationResult = validateTicket(barCodeNumber);

    if (dealershipTicketValidationResult) {
      return dealershipTicketDataObject(barCodeNumber);
    }
  }
  return invalidTicket;
};

module.exports = barCodeTicket;
