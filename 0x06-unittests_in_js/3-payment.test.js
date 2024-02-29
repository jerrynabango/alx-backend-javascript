const assert = require("assert");
const Utils = require("./utils");
const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", function() {
    it("check that Utils.calculateNumber was called once", function() {
	const spy = sinon.spy(Utils, "calculateNumber");

	sendPaymentRequestToApi(50, 24.52);

	assert(spy.calledOnce);
	spy.restore();
    });
});
