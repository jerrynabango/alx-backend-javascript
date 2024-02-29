const express = require("express");

const app = express();
const port = 7865;

app.get("/", (req, resp) => {
  resp.send("Welcome to the payment system");
});

app.get("/cart/:id([0-9]+)", (req, resp) => {
    resp.send(`Payment methods for cart ${req.params.id}`);
});

app.get("/available_payments", (req, resp) => {
    resp.set("Content-Type", "application/json");
    const payMethods = {
	payment_methods: {
          credit_cards: true,
          paypal: false
	}
    }
    resp.send(payMethods);
});

app.post("/login", (req, resp) => {
    const userName = request.body.userName;
    if (userName) {
	resp.send(`Welcome ${userName}`);
    } else {
	resp.status(404).send();
    }
});

app.listen(port, () => {
    console.log("API available on localhost port 7865");
});

module.exports = app;
