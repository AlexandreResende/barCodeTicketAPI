
const chai = require('chai');
const roundTo = require('round-to');
const expect = chai.expect;

const getDueDate = require('../api/helper/getDueDate');

describe(`Test getDueDate module`, () => {
  it(`should return due date 09/08/2017`, (done) => {
    const expectedValue = '09/08/2017';
    const barCodeNumber = '34191760074639344129352618690003372460000360125';
    const dueDateResult = getDueDate(barCodeNumber);

    expect(dueDateResult).to.equal(expectedValue);
    done();
  });

  it(`should return due date 31/12/2007`, (done) => {
    const expectedValue = '31/12/2007';
    const barCodeNumber = '00190500954014481606906809350314337370000000100';
    const dueDateResult = getDueDate(barCodeNumber);

    expect(dueDateResult).to.equal(expectedValue);
    done();
  });
});