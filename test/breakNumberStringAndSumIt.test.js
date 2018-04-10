
const chai = require('chai');
const expect = chai.expect;

const breakNumberStringAndSumIt = require('../api/helper/breakNumberStringAndSumIt');

describe(`Test breakNumberStringAndSumIt module`, () => {
  it(`should return 1 with input "10"`, (done) => {
    const input = "10";
    const expectedValue = 1;
    const breakNumberSumResult = breakNumberStringAndSumIt(input);

    expect(breakNumberSumResult).to.equal(expectedValue);
    done();
  });

  it(`should return 5 with input "5"`, (done) => {
    const input = "5";
    const expectedValue = 5;
    const breakNumberSumResult = breakNumberStringAndSumIt(input);

    expect(breakNumberSumResult).to.equal(expectedValue);
    done();
  });

  it(`should return 27 with input "999"`, (done) => {
    const input = "999";
    const expectedValue = 27;
    const breakNumberSumResult = breakNumberStringAndSumIt(input);

    expect(breakNumberSumResult).to.equal(expectedValue);
    done();
  });
});