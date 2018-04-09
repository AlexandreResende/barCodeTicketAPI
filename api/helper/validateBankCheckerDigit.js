
const bankBarCode = require('./bankBarCode');
const ticketType = require('./ticketType');

const validateBankCheckerDigit = (ticketTypedLine) => {
  let multiplier = 2;
  let sum = 0;
  const baseNumber = 11;
  const barCodeCheckerDigit = ticketTypedLine[32];
  const ticketTypeName = ticketType(ticketTypedLine);
  const barCode = bankBarCode(ticketTypedLine);

  const reversedSplitedbarCodeNumber = barCode
    .slice(0)
    .split('')
    .map(Number)
    .reverse();

  for (let digit of reversedSplitedbarCodeNumber) {
    if (multiplier >= 10) {
      multiplier = 2;
    }
    sum += multiplier * digit;
    multiplier++;
  }

  const remainderOfDivisionByEleven = sum % baseNumber;
  let checkerDigitCalculated = baseNumber - remainderOfDivisionByEleven;

  checkerDigitCalculated = (
    checkerDigitCalculated == 0
    || checkerDigitCalculated == 10
    || checkerDigitCalculated == 11) ? 1 : checkerDigitCalculated;

  return checkerDigitCalculated == barCodeCheckerDigit;
};

module.exports = validateBankCheckerDigit;
