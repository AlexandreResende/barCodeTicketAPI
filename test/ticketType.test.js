
const chai = require('chai');
const roundTo = require('round-to');
const expect = chai.expect;

const ticketType = require('../api/helper/ticketType');

describe(`Test ticketType module`, () => {
  it(`should return bank`, (done) => {
    const expectedValue = 'bank';
    const barCodeNumber = '34191760074639344129352618690003372460000360125';
    const ticketTypeResult = ticketType(barCodeNumber);

    expect(ticketTypeResult).to.equal(expectedValue);
    done();
  });

  it(`should return dealership`, (done) => {
    const expectedValue = 'dealership';
    const barCodeNumber = '846700000009799001090114001512793801300995016940';
    const ticketTypeResult = ticketType(barCodeNumber);

    expect(ticketTypeResult).to.equal(expectedValue);
    done();
  });

  it(`should return not valid`, (done) => {
    const expectedValue = 'not valid';
    const barCodeNumber = '187361873618371638173612173618731';
    const ticketTypeResult = ticketType(barCodeNumber);

    expect(ticketTypeResult).to.equal(expectedValue);
    done();
  });
});