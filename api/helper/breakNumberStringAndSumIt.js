
const breakNumberStringAndSumIt = (numberString) => {
  return numberString
    .split('')
    .map(Number)
    .reduce((acc, number) => acc + number, 0);
};

module.exports = breakNumberStringAndSumIt;
