
const checkerDigitPosition = require('./checkerDigitPosition.json');

const getBankBarCodeValue = (barCodeNumber) => {
  if (barCodeNumber.length === 47) {
    return barCodeNumber.substring(37) / 100;
  } else {
    const ticketType = 'dealership';
    const barCodeNumberWithoutCheckerDigits = barCodeNumber
      .slice(0)
      .split('');

    for (let position of checkerDigitPosition[ticketType]) {
      barCodeNumberWithoutCheckerDigits.splice(position, 1)
    }

    const barCodeNumberWithoutCheckerDigitsString = barCodeNumberWithoutCheckerDigits
      .join('');

    return barCodeNumberWithoutCheckerDigitsString.substring(4, 15) / 100;
  }
};

module.exports = getBankBarCodeValue;
