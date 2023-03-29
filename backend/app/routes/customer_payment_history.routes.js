module.exports = app => {
    const customer_payment_history = require("../controllers/customer_payment_history.controller");
    var router = require("express").Router();
  
    // Create a new customer_payment_history
    router.post("/", customer_payment_history.create);
  
    // Retrieve all customer_payment_history
    router.get("/", customer_payment_history.findAll);
  
    // Retrieve a single customer_payment_history with id
    router.get("/:id", customer_payment_history.findOne);
  
  
    app.use('/api/v1/customer-payment-history', router);
  };