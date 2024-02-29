const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {
    it(`verifies the sum of rounded numbers`, function() {
      const output = calculateNumber("SUM", 1, 2);
      assert.strictEqual(output, 3);
    });

    it(`verifies the difference of rounded numbers`, function() {
      const output = calculateNumber("SUBTRACT", 1.4, 2.2);
      assert.strictEqual(output, -1);
    });

    it(`verifies the difference of rounded numbers`, function() {
      const output = calculateNumber("SUBTRACT", 4.9, 2.7);
      assert.strictEqual(output, 2);
    });

    it(`verifies the sum of rounded numbers`, function() {
      const output = calculateNumber("DIVIDE", 4, 2);
      assert.strictEqual(output, 2);
    });

    it(`verifies the division by zero error`, function() {
      const output = calculateNumber("DIVIDE", 1.7, 0);
      assert.strictEqual(output, "Error");
    });

    it(`verifies the quotient of rounded numbers`, function() {
      const output = calculateNumber("DIVIDE", 1.4, 4.6);
      assert.strictEqual(output, 0.2);
    });
});
