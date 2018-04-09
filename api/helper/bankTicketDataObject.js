
const getDueDate = require('./getDueDate');
const getTicketValue = require('./getTicketValue');
const bankBarCode = require('./bankBarCode');

const bankTicketDataObject = (ticketTypedLine) => {
  return {
    ticketData: {
      value: getTicketValue(ticketTypedLine),
      dueDate: getDueDate(ticketTypedLine),
      barCode: bankBarCode(ticketTypedLine),
    },
    error: null,
  }
}

module.exports = bankTicketDataObject;
