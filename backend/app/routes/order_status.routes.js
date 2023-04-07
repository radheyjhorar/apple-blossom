module.exports = app => {
    const order_status = require("../controllers/order_status.controller");
    var router = require("express").Router();
  
    // Create a new order_status
    router.post("/", order_status.create);
  
    // Retrieve all order_status
    router.get("/", order_status.findAll);
  
    // Retrieve a single order_status with id
    router.get("/:id", order_status.findOne);
  
    // Update a order_status with id
    router.put("/:id", order_status.update);
  
    // Delete a order_status with id
    router.delete("/:id", order_status.delete);
  
    app.use('/api/v1/order_status', router);
  };
  