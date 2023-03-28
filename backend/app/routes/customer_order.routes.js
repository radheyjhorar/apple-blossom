module.exports = app => {
    const customer_order = require("../controllers/customer_order.controller");
    var router = require("express").Router();
  
    // Create a new customer_order
    router.post("/", customer_order.create);
  
    // Retrieve all customer_order
    router.get("/", customer_order.findAll);
  
    // Retrieve a single customer_order with id
    router.get("/:id", customer_order.findOne);
  
    // Update a customer_order with id
    router.put("/:id", customer_order.update);
  
    // Delete a customer_order with id
    router.delete("/:id", customer_order.delete);
  

  
    app.use('/api/v1/board', router);
  };
  