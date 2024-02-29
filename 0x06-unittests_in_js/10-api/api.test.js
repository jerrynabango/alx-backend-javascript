const chai = require("chai");
const request = require("request");
const { expect } = chai;

describe("Index page", () => {
  it("should respond with welcome message", (done) => {
    try {
      req("http://localhost:7865/", (error, resp, body) => {
        if (error) throw error;
        expect(body).to.equal("Welcome to the payment system");
        expect(resp.statusCode).to.equal(200);
        done();
      });
    } catch (error) {
      done(error);
    }
  });
  describe("Cart endpoint", () => {
    it("should respond with payment methods for the specified cart", (done) => {
      try {
        req("http://localhost:7865/cart/12", (error, resp, body) => {
          if (error) throw error;
          expect(body).to.equal("Payment methods for cart 12");
          expect(resp.statusCode).to.equal(200);
          done();
        });
      } catch (error) {
        done(error);
      }
    });
    it("should respond with status 404 if cart ID is not a number", (done) => {
      try {
        req("http://localhost:7865/cart/uber", (error, resp) => {
          if (error) throw error;
          expect(resp.statusCode).to.equal(404);
          done();
        });
      } catch (error) {
        done(error);
      }
    });
  });
  describe("Available payments endpoint", () => {
    it("should respond with available payment methods", (done) => {
      try {
        req("http://localhost:7865/available_payments", (error, resp, body) => {
          if (error) throw error;
          expect(JSON.parse(body)).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false,
            },
          });
          expect(resp.statusCode).to.equal(200);
          done();
        });
      } catch (error) {
        done(error);
      }
    });
  });
  describe("Login endpoint", () => {
    it("should respond with a welcome message for the specified user", (done) => {
      try {
        req.post({
          url: "http://localhost:7865/login",
          json: { userName: "Betty" },
        }, (error, resp, body) => {
          if (error) throw error;
          expect(body).to.equal("Welcome Betty");
          expect(resp.statusCode).to.equal(200);
          done();
        });
      } catch (error) {
        done(error);
      }
    });
  });
});
