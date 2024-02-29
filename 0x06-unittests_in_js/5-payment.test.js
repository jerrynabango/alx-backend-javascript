const expect = require("chai").expect;
const sinon = require("sinon");
const { describe, it } = require("mocha");
const sendPaymentRequestToApi = require("./5-payment");

describe("sendPaymentRequestToApi", function() {
    beforeEach("Prepare spy for each test", function() {
        sinon.spy(console, "log");
    });
    afterEach("Restore spy after each test", function() {
        console.log.restore();
    });
    it("verifies if console.log is called with the correct argument", function() {
        sendPaymentRequestToApi(100, 20);

        expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
    });
    it("verifies if console.log is called with the correct argument", function() {
        sendPaymentRequestToApi(10, 10);

        expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
    });
});
