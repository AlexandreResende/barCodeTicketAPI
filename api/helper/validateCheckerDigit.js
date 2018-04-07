
const checkerDigitPosition = require('./checkerDigitPosition.json');
const ticketType = require('./ticketType');

const breakNumberStringAndSumIt = (numberString) => {
  return numberString
    .split('')
    .map(Number)
    .reduce((acc, number) => acc + number, 0);
};

const validateBankFieldCheckerDigit = (field, checkerDigit) => {
  let sum = 0;
  let multiplierFlag = true;
  const reversedSplitField = field.slice(0).split('').reverse();
  
  for (let digit of reversedSplitField) {
    if (multiplierFlag) {
      sum += breakNumberStringAndSumIt(String(digit * 2));
    } else {
      sum += breakNumberStringAndSumIt(String(digit));
    }
    multiplierFlag = !multiplierFlag;
  }

  const checkerDigitCalculated = (10 - (sum % 10) === 10) ? 0 : 10 - (sum % 10);

  return checkerDigit == checkerDigitCalculated;
};

const validateBankCheckerDigit = (barCodeNumber) => {
  let multiplier = 2;
  let sum = 0;
  const referenceNumber = 11;
  const barCodeCheckerDigit = barCodeNumber[32];
  const ticketTypeName = ticketType(barCodeNumber);
  const bankCode = barCodeNumber.substring(0, 3);
  const currencyCode = barCodeNumber[3];
  const dueDate = barCodeNumber.substring(33, 37);
  const ticketValue = barCodeNumber.substring(37);
  const freeField = barCodeNumber.substring(4, 9)
    + barCodeNumber.substring(10, 20)
    + barCodeNumber.substring(21, 31);

  const barCode = `${bankCode}${currencyCode}${dueDate}${ticketValue}${freeField}`;
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

  const remainderOfDivisionByEleven = sum % referenceNumber;
  let checkerDigitCalculated = referenceNumber - remainderOfDivisionByEleven;

  checkerDigitCalculated = (
    checkerDigitCalculated == 0
    || checkerDigitCalculated == 10
    || checkerDigitCalculated == 11) ? 1 : checkerDigitCalculated;

  return checkerDigitCalculated == barCodeCheckerDigit;
};

const validateDealershipCheckerDigit = (barCodeNumber) => {};

const validateCheckerDigit = (barCodeNumber) => {
  const ticketTypeResult = ticketType(barCodeNumber);

  if (ticketTypeResult === 'bank') {
    const validateFirstField = validateBankFieldCheckerDigit(
      barCodeNumber.substring(0, 9),
      barCodeNumber[9],
    );
    const validateSecondField = validateBankFieldCheckerDigit(
      barCodeNumber.substring(10, 20),
      barCodeNumber[20],
    );
    const validateThirdField = validateBankFieldCheckerDigit(
      barCodeNumber.substring(21, 31),
      barCodeNumber[31], 
    );
    const validateBarCodeCheckerDigit = validateBankCheckerDigit(
      barCodeNumber,
    );

    return validateFirstField 
      && validateSecondField
      && validateThirdField
      && validateBarCodeCheckerDigit;
  } else if (ticketTypeResult === 'dealership') {

  }
  return false;
};

module.exports = validateCheckerDigit;
