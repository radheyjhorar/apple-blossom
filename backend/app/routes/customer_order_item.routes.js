module.exports = app => {
    const customer_order_item = require("../controllers/customer_order_item.controller");
    var router = require("express").Router();
  
    // Create a new customer_order_item
    router.post("/", customer_order_item.create);
  
    // Retrieve all customer_order_item
    router.get("/", customer_order_item.findAll);
  
    // Retrieve a single customer_order_item with id
    router.get("/:id", customer_order_item.findOne);
  
    // Update a customer_order_item with id
    router.put("/:id", customer_order_item.update);
  
    // Delete a customer_order_item with id
    router.delete("/:id", customer_order_item.delete);
  
    app.use('/api/v1/customer-order-item', router);
  };
  