

/*
*This function is not being used
*but it context is to get a multiplier
*to be used to find the dueDate in
*bankTickets
*/

const getDate = (d) => {
  const day = (d.getDate() > 9) ? d.getDate() : `0${d.getDate()}`;
  const month = (d.getMonth() + 1 > 9) ? d.getMonth() + 1 : `0${d.getMonth()+1}`;
  const year = d.getFullYear();
  
  return `${year}/${month}/${day}`;
}

const getFactorMultiplier = () => {
  let factorMultiplier = 0;
  let factor1000Date = new Date(2000, 6, 3);
  const millisecondsInADay = 86400000;
  const baseDateInMilliseconds = new Date(2000, 6, 3).getTime();
  const currentDate = new Date(Date.now());

  while (true) {
    factor1000Date = new Date(baseDateInMilliseconds + millisecondsInADay * factor * 9000);
    if (currentDate.getTime() < factor1000Date.getTime()) {
      break;
    } else {
      factorMultiplier++;
    }
  }
  return factorMultiplier - 1;
};

module.exports = getFactorMultiplier;
