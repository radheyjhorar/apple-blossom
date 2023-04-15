module.exports = app => {
    const order_status = require("../controllers/order_status.controller");
    var router = require("express").Router();
  
    // Create a new customer
    router.post("/", order_status.create);
  
    // Retrieve all customers
    router.get("/", order_status.findAll);
  
    // Retrieve a single customer with id
    router.get("/:id", order_status.findOne);
  
    // Update a customer with id
    router.put("/:id", order_status.update);
  
    // Delete a customer with id
    router.delete("/:id", order_status.delete);
   
    app.use('/api/v1/order-status', router);
  
  };
  