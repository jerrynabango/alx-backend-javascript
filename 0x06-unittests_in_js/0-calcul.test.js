const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("validateRoundingBehavior()", function() {

    it(`should round 1 and 2 to 3`, function() {
      const output = calculateNumber(1, 2);
      assert.strictEqual(output, 3);
    });
    it(`should round 1.4 and 2.2 to 3`, function() {
      const output = calculateNumber(1.4, 2.2);
      assert.strictEqual(output, 3);
    });
    it(`should round 1.6 and 2.7 to 5`, function() {
      const output = calculateNumber(1.6, 2.7);
      assert.strictEqual(output, 5);
    });
    it(`should round 0 and 0 to 0`, function() {
      const output = calculateNumber(0, 0);
      assert.strictEqual(output, 0);
    });
    it(`should round -1.6 and -1.7 to -4`, function() {
      const output = calculateNumber(-1.6, -1.7);
      assert.strictEqual(output, -4);
    });
    it(`should round -1.4 and -1.3 to -2`, function() {
      const output = calculateNumber(-1.4, -1.3);
      assert.strictEqual(output, -2);
    });
});
