module.exports = app => {
    const vendor_payment_history = require("../controllers/vendor_payment_history.controller");
    var router = require("express").Router();
  
    // Create a new vendor_payment_history
    router.post("/", vendor_payment_history.create);
  
    // Retrieve all vendor_payment_history
    router.get("/", vendor_payment_history.findAll);
  
    // Retrieve a single vendor_payment_history with id
    router.get("/:id", vendor_payment_history.findOne);
  
  
    app.use('/api/v1/board', router);
  };