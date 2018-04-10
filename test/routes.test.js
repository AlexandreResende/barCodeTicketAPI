
const chai = require('chai');
const chaiHttp = require('chai-http');
const roundTo = require('round-to');
const expect = chai.expect;

const app = require('../app');

chai.use(chaiHttp);

describe(`Test app routes`, () => {
  it(`should return a JSON on the POST method`, (done) => {
    const expectedValue = 79.90;

    chai
      .request(app)
      .post('/barcodeticket')
      .set('content-type', 'application/json')
      .send({
        ticketTypedLine: '846700000009799001090114001512793801300995016940',
      })
      .end(function(err, res) {
        console.log(res.statusCode);
        console.log(res.body);
        done();
      });

    /* expect(roundTo(getTicketValueResult, 2)).to.equal(expectedValue);
    done(); */
  });
});