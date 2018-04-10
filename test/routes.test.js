
const chai = require('chai');
const chaiHttp = require('chai-http');
const roundTo = require('round-to');
const expect = chai.expect;

const app = require('../app');

chai.use(chaiHttp);

describe(`Test app routes`, () => {
  describe(`Testing the POST route /barcodeticket`, () => {
    let response;

    beforeEach((done) => {
      const endpoint = `/barcodeticket`;

      chai
      .request(app)
      .post(endpoint)
      .set('content-type', 'application/json')
      .send({
        ticketTypedLine: '846700000009799001090114001512793801300995016940',
      })
      .end(function(err, res) {
        response = res;
        done();
      });
    });

    it(`should return a status code 200`, (done) => {
      const expectedValue = 200;
      expect(response.statusCode).to.be.equal(200);
      done();      
    });

    it(`should return an object`, (done) => {
      const expectedValue = 'object';
      expect(response.body).to.be.an('object');
      done();      
    });

    it(`should contains a ticketData key`, (done) => {
      const expectedValue = 'ticketData';
      expect(response.body).to.have.property(expectedValue);
      done();      
    });

    it(`should contains a value key`, (done) => {
      const expectedValue = 'value';
      expect(response.body.ticketData).to.have.property(expectedValue);
      done();      
    });

    it(`should contains a dueDate key`, (done) => {
      const expectedValue = 'dueDate';
      expect(response.body.ticketData).to.have.property(expectedValue);
      done();      
    });

    it(`should contains a dueDate key`, (done) => {
      const expectedValue = 'barCode';
      expect(response.body.ticketData).to.have.property(expectedValue);
      done();      
    });
  });

  describe(`Testing the GET route /barcodeticket`, () => {
    let response;

    beforeEach((done) => {
      const endpoint = `/barcodeticket`;

      chai
      .request(app)
      .get('/barcodeticket?ticketTypedLine=34191760074639344129352618690003372460000360125')
      .set('content-type', 'application/json')
      .end(function(err, res) {
        response = res;
        done();
      });
    });

    it(`should return a status code 200`, (done) => {
      const expectedValue = 200;
      expect(response.statusCode).to.be.equal(200);
      done();      
    });

    it(`should return an object`, (done) => {
      const expectedValue = 'object';
      expect(response.body).to.be.an('object');
      done();      
    });

    it(`should contains a ticketData key`, (done) => {
      const expectedValue = 'ticketData';
      expect(response.body).to.have.property(expectedValue);
      done();      
    });

    it(`should contains a value key`, (done) => {
      const expectedValue = 'value';
      expect(response.body.ticketData).to.have.property(expectedValue);
      done();      
    });

    it(`should contains a dueDate key`, (done) => {
      const expectedValue = 'dueDate';
      expect(response.body.ticketData).to.have.property(expectedValue);
      done();      
    });

    it(`should contains a dueDate key`, (done) => {
      const expectedValue = 'barCode';
      expect(response.body.ticketData).to.have.property(expectedValue);
      done();      
    });
  });
});