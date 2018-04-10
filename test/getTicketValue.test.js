
const chai = require('chai');
const roundTo = require('round-to');
const expect = chai.expect;

const getTicketValue = require('../api/helper/getTicketValue');

describe(`Test getTicketValue module`, () => {
  it(`should return 79.90 as value`, (done) => {
    const expectedValue = 79.90;
    const barCodeNumber = '846700000009799001090114001512793801300995016940';
    const getTicketValueResult = getTicketValue(barCodeNumber);

    expect(roundTo(getTicketValueResult, 2)).to.equal(expectedValue);
    done();
  });

  it(`should return 3601.25 as value`, (done) => {
    const expectedValue = 3601.25;
    const barCodeNumber = '34191760074639344129352618690003372460000360125';
    const getTicketValueResult = getTicketValue(barCodeNumber);

    expect(roundTo(getTicketValueResult, 2)).to.equal(expectedValue);
    done();
  });
});