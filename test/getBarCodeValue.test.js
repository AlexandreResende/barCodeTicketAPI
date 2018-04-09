
const chai = require('chai');
const roundTo = require('round-to');
const expect = chai.expect;

const getTicketValue = require('../api/helper/getTicketValue');

describe(`Test getTicketValue module`, () => {
  let barCodeNumber;

  describe(`with dealership barcode numbers`, () => {
    beforeEach((done) => {
      barCodeNumber = '846700000009799001090114001512793801300995016940';
      done();
    });
  
    it(`should return value 79.90`, (done) => {
      const barCodeValue = getTicketValue(barCodeNumber);
      const expectedValue = 79.90;
  
      expect(roundTo(barCodeValue, 2)).to.equal(expectedValue);
      done();
    });
  });

  describe(`with bank barcode numbers`, () => {
    beforeEach((done) => {
      barCodeNumber = '34191760074639344129352618690003372460000360125';
      done();
    });
  
    it(`should return value 3601.25`, (done) => {
      const barCodeValue = getTicketValue(barCodeNumber);
      const expectedValue = 3601.25;

      expect(roundTo(barCodeValue, 2)).to.equal(expectedValue);
      done();
    });
  });
});