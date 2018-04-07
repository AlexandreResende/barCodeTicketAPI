
const ticketType = (barCodeNumber) => {
  if (barCodeNumber.length == 47) { 
    return 'bank'
   } else if (barCodeNumber.length == 48) {
     return 'dealership';
   }
  return 'not valid';
};

module.exports = ticketType;
