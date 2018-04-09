
const checkerDigitPosition = require('./checkerDigitPosition.json');
const validateFieldCheckerDigit = require('./validateFieldCheckerDigit');

const validateDealershipCheckerDigit = (barCodeNumber) => {
  const ticketType = 'dealership';
  const generalCheckerDigitPosition = 3;
  const checkerDigit = barCodeNumber[generalCheckerDigitPosition];
  const barCodeNumberArray = barCodeNumber
    .slice(0)
    .split('');

  for (let digit of checkerDigitPosition[ticketType]) {
    barCodeNumberArray.splice(digit, 1);
  }
  barCodeNumberArray.splice(generalCheckerDigitPosition, 1);

  const newBarCodeNumber = barCodeNumberArray.join('');

  return validateFieldCheckerDigit(newBarCodeNumber, checkerDigit);
};

module.exports = validateDealershipCheckerDigit;
