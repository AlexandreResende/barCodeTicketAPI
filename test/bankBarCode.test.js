
const chai = require('chai');
const expect = chai.expect;

const bankBarCode = require('../api/helper/bankBarCode');

describe(`Test bankBarCode module`, () => {
  it(`should return 3419724600003601251760046393441295261869000 as barcode`, (done) => {
    const typedLine = '34191760074639344129352618690003372460000360125';
    const expectedValue = '3419724600003601251760046393441295261869000';
    const bankBarCodeResult = bankBarCode(typedLine);

    expect(bankBarCodeResult).to.equal(expectedValue);
    done();
  });
});