
const bankBarCode = (ticketTypedLine) => {
  const bankCode = ticketTypedLine.substring(0, 3);
  const currencyCode = ticketTypedLine[3];
  const dueDate = ticketTypedLine.substring(33, 37);
  const ticketValue = ticketTypedLine.substring(37);
  const freeField = ticketTypedLine.substring(4, 9)
    + ticketTypedLine.substring(10, 20)
    + ticketTypedLine.substring(21, 31);

  return `${bankCode}${currencyCode}${dueDate}${ticketValue}${freeField}`;
};

module.exports = bankBarCode;