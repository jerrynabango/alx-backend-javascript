const chaiExpect = require("chai").expect;
const { describe, it } = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function() {
    describe("SUM operation", function() {
        it("verifies the sum of rounded numbers is correct", function() {
            chaiExpect(calculateNumber("SUM", 1, 2)).to.equal(3);
        });
        it("verifies the sum of rounded decimal numbers is correct", function() {
            chaiExpect(calculateNumber("SUM", 1.6, 2.6)).to.equal(5);
        });
    });

    describe("SUBTRACT operation", function() {
        it("verifies the difference of rounded numbers is correct", function() {
            chaiExpect(calculateNumber("SUBTRACT", 1.4, 2.3)).to.equal(-1);
        });
        it("verifies the difference of rounded numbers is correct", function() {
            chaiExpect(calculateNumber("SUBTRACT", 4.9, 2.7)).to.equal(2);
        });
        it("verifies the difference of negative rounded numbers is correct", function() {
            chaiExpect(calculateNumber("SUBTRACT", -4.9, -2.7)).to.equal(-2);
        });
    });

    describe("DIVIDE operation", function() {
        it("verifies the division of rounded numbers is correct", function() {
            chaiExpect(calculateNumber("DIVIDE", 4, 2)).to.equal(2);
        });
        it("verifies the division of rounded decimal numbers is correct", function() {
            chaiExpect(calculateNumber("DIVIDE", 4.6, 1.8)).to.equal(2.5);
        });
        it("verifies division by zero results in 'Error'", function() {
            chaiExpect(calculateNumber("DIVIDE", 4, 0)).to.equal("Error");
        });
    });
});
