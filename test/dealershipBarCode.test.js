
const chai = require('chai');
const roundTo = require('round-to');
const expect = chai.expect;

const dealershipBarCode = require('../api/helper/dealershipBarCode');

describe(`Test dealershipBarCode module`, () => {
  it(`should return 84670000000799001090110015127938030099501694 as barcode`, (done) => {
    const expectedValue = '84670000000799001090110015127938030099501694';
    const barCodeNumber = '846700000009799001090114001512793801300995016940';
    const dealershipBarCodeResult = dealershipBarCode(barCodeNumber);

    expect(dealershipBarCodeResult).to.equal(expectedValue);
    done();
  });
});