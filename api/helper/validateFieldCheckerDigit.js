
const breakNumberStringAndSumIt = require('./breakNumberStringAndSumIt');

const validateFieldCheckerDigit = (field, checkerDigit) => {
  let sum = 0;
  let multiplierFlag = true;
  const baseNumber = 10;
  const reversedSplitField = field.slice(0).split('').reverse();
  
  for (let digit of reversedSplitField) {
    if (multiplierFlag) {
      sum += breakNumberStringAndSumIt(String(digit * 2));
    } else {
      sum += breakNumberStringAndSumIt(String(digit));
    }
    multiplierFlag = !multiplierFlag;
  }

  const checkerDigitCalculated = (baseNumber - (sum % baseNumber) === baseNumber)
    ? 0
    : baseNumber - (sum % baseNumber);

  return checkerDigit == checkerDigitCalculated;
};

module.exports = validateFieldCheckerDigit;
