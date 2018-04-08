
const checkerDigitPosition = require('./checkerDigitPosition.json');
const ticketType = require('./ticketType');

const breakNumberStringAndSumIt = (numberString) => {
  return numberString
    .split('')
    .map(Number)
    .reduce((acc, number) => acc + number, 0);
};

const validateFieldCheckerDigit = (field, checkerDigit) => {
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

const validateDealershipFieldCheckerDigit = (barCodeNumber) => {};

const validateCheckerDigit = (barCodeNumber) => {
  const ticketTypeResult = ticketType(barCodeNumber);

  if (ticketTypeResult === 'bank') {
    const validateFirstField = validateFieldCheckerDigit(
      barCodeNumber.substring(0, 9),
      barCodeNumber[9],
    );
    const validateSecondField = validateFieldCheckerDigit(
      barCodeNumber.substring(10, 20),
      barCodeNumber[20],
    );
    const validateThirdField = validateFieldCheckerDigit(
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
    const validateFirstField = validateFieldCheckerDigit(
      barCodeNumber.substring(0, 11),
      barCodeNumber[11],
    );
    const validateSecondField = validateFieldCheckerDigit(
      barCodeNumber.substring(12, 23),
      barCodeNumber[23],
    );
    const validateThirdField = validateFieldCheckerDigit(
      barCodeNumber.substring(24, 35),
      barCodeNumber[35],
    );
    const validateFourthField = validateFieldCheckerDigit(
      barCodeNumber.substring(26, 47),
      barCodeNumber[47],
    );
    /* const validateBarCodeCheckerDigit = validateDealershipCheckerDigit(
      barCodeNumber,
    ); */
    console.log('AKI');
    console.log(validateFirstField);
    console.log(validateSecondField);
    console.log(validateThirdField);
    console.log(validateFourthField);
    return validateFirstField 
      && validateSecondField
      && validateThirdField
      && validateFourthField;
      //&& validateBarCodeCheckerDigit;
  }
  return false;
};

module.exports = validateCheckerDigit;
