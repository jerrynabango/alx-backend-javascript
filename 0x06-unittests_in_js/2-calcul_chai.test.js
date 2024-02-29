const expect = require("chai");
const { it, describe } = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber()", function() {
    it(`verifies the sum of rounded numbers`, function() {
      const output = calculateNumber("SUM", 1, 2);
      expect(output).to.equal(3);
    });

    it(`verifies the difference of rounded numbers`, function() {
      const output = calculateNumber("SUBTRACT", 1.4, 2.2);
      expect(output).to.equal(-1);
    });

    it(`verifies the difference of rounded numbers`, function() {
      const output = calculateNumber("SUBTRACT", 4.9, 2.7);
      expect(output).to.equal(2);
    });

    it(`verifies the sum of rounded numbers`, function() {
      const output = calculateNumber("DIVIDE", 4, 2);
      expect(output).to.equal(2);
    });

    it(`verifies the division by zero error`, function() {
      const output = calculateNumber("DIVIDE", 1.7, 0);
      expect(output).to.equal("Error");
    });

    it(`verifies the quotient of rounded numbers`, function() {
      const output = calculateNumber("DIVIDE", 1.4, 4.6);
      expect(output).to.equal(0.2);
    });
});
