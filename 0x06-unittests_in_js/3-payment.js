const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const output = Utils.calculateNumber("SUM", totalAmount, totalShipping);
    console.log(`The total is: ${ouput}`);
}

module.exports = sendPaymentRequestToApi;
