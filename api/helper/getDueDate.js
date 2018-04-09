
const getDueDate = (ticketTypedLine) => {
  const factor = 1000;
  const millisecondsInADay = 86400000;
  const dueDate = ticketTypedLine.substring(33, 37);
  const baseDateInMilliseconds = new Date(2000, 6, 3).getTime();

  const dueDateInMilliseconds = baseDateInMilliseconds + millisecondsInADay * (dueDate - factor);
  const ticketDueDate = new Date(dueDateInMilliseconds);

  let day = ticketDueDate.getDate();
  let month = ticketDueDate.getMonth() + 1;
  const year = ticketDueDate.getFullYear();

  day = (day < 10) ? '0' + String(day) : day;
  month = (month < 10) ? '0' + String(month) : month;

  return `${day}/${month}/${year}`;
};

module.exports = getDueDate;
