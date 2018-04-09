
const checkerDigitPosition = require('./checkerDigitPosition.json');

const dealershipBarCode = (ticketTypedLine) => {
  const ticketType = 'dealership';
  const newTicketTypedLine = ticketTypedLine
    .slice(0)
    .split('');

  for (let digit of checkerDigitPosition[ticketType]) {
    newTicketTypedLine.splice(digit, 1);
  }

  return newTicketTypedLine.join('');
};

module.exports = dealershipBarCode;