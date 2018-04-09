
const ticketType = require('./ticketType');
const checkerDigitPosition = require('./checkerDigitPosition.json');
const validateFieldCheckerDigit = require('./validateFieldCheckerDigit');
const breakNumberStringAndSumIt = require('./breakNumberStringAndSumIt');
const validateBankCheckerDigit = require('./validateBankCheckerDigit');
const validateDealershipCheckerDigit = require('./validateDealershipCheckerDigit');

const validateCheckerDigit = (ticketTypedLine) => {
  const ticketTypeResult = ticketType(ticketTypedLine);

  if (ticketTypeResult === 'bank') {
    const validateFirstField = validateFieldCheckerDigit(
      ticketTypedLine.substring(0, 9),
      ticketTypedLine[9],
    );
    const validateSecondField = validateFieldCheckerDigit(
      ticketTypedLine.substring(10, 20),
      ticketTypedLine[20],
    );
    const validateThirdField = validateFieldCheckerDigit(
      ticketTypedLine.substring(21, 31),
      ticketTypedLine[31], 
    );
    const validateBarCodeCheckerDigit = validateBankCheckerDigit(
      ticketTypedLine,
    );

    return validateFirstField 
      && validateSecondField
      && validateThirdField
      && validateBarCodeCheckerDigit;
  } else if (ticketTypeResult === 'dealership') {
    const validateFirstField = validateFieldCheckerDigit(
      ticketTypedLine.substring(0, 11),
      ticketTypedLine[11],
    );
    const validateSecondField = validateFieldCheckerDigit(
      ticketTypedLine.substring(12, 23),
      ticketTypedLine[23],
    );
    const validateThirdField = validateFieldCheckerDigit(
      ticketTypedLine.substring(24, 35),
      ticketTypedLine[35],
    );
    const validateFourthField = validateFieldCheckerDigit(
      ticketTypedLine.substring(26, 47),
      ticketTypedLine[47],
    );
    const validateBarCodeCheckerDigit = validateDealershipCheckerDigit(
      ticketTypedLine,
    );

    return validateFirstField 
      && validateSecondField
      && validateThirdField
      && validateFourthField
      && validateBarCodeCheckerDigit;
  }
  return false;
};

module.exports = validateCheckerDigit;
