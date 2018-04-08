
const chai = require('chai');
const roundTo = require('round-to');
const expect = chai.expect;

const validateCheckerDigit = require('../api/helper/validateCheckerDigit');

describe(`Test validateCheckerDigit module`, () => {
  let barCodeNumber;

  describe(`with dealership barcode numbers`, () => { 
    it(`should return true for valid dealership ticket`, (done) => {
      const expectedValue = true;
      const barCodeNumber = '846700000009799001090114001512793801300995016940';
      const validateCheckerDigitResult = validateCheckerDigit(barCodeNumber);
  
      expect(validateCheckerDigitResult).to.equal(expectedValue);
      done();
    });

    it.only(`should return true for valid dealership ticket`, (done) => {
      const expectedValue = false;
      const barCodeNumber = '846800000009799001090114001512793801300995016940';
      const validateCheckerDigitResult = validateCheckerDigit(barCodeNumber);
  
      expect(validateCheckerDigitResult).to.equal(expectedValue);
      done();
    });
  });

  describe(`with bank barcode numbers`, () => {
    //'341917600 7 4639344129 3 5261869000 3 3 72460000360125'
    //'001905009 5 4014481606 9 0680935031 4 3 37370000000100'
    it(`should return true for valid bank ticket`, (done) => {
      const expectedValue = true;
      const barCodeNumber = '34191760074639344129352618690003372460000360125';
      const validateCheckerDigitResult = validateCheckerDigit(barCodeNumber);

      expect(validateCheckerDigitResult).to.equal(expectedValue);
      done();
    });

    it(`should return true for valid bank ticket`, (done) => {
      const expectedValue = true;
      const barCodeNumber = '00190500954014481606906809350314337370000000100';
      const validateCheckerDigitResult = validateCheckerDigit(barCodeNumber);

      expect(validateCheckerDigitResult).to.equal(expectedValue);
      done();
    });

    it(`should return false for invalid ticket`, (done) => {
      const expectedValue = false;
      const barCodeNumber = '00190500954014481606906809350314357371111111110';
      const validateCheckerDigitResult = validateCheckerDigit(barCodeNumber);

      expect(validateCheckerDigitResult).to.equal(expectedValue);
      done();
    });
  });
});