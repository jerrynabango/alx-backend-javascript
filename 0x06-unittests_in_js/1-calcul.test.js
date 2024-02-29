const assert = require("assert");
const calculateNumber = require("./calculateNumber");

describe("calculateNumber()", function() {
  it("sum of rounded numbers", function() {
    const result = calculateNumber("SUM", 1.5, 2.7);
    assert.strictEqual(result, 4);
  });

  it("difference of rounded numbers", function() {
    const result = calculateNumber("SUBTRACT", 3.8, 1.2);
    assert.strictEqual(result, 3);
  });

  it("division by zero error", function() {
    const result = calculateNumber("DIVIDE", 5, 0);
    assert.strictEqual(result, "Error");
  });

  it("quotient of rounded numbers", function() {
    const result = calculateNumber("DIVIDE", 10, 3);
    assert.strictEqual(result, 3);
  });
});
