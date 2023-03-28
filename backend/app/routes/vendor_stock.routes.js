module.exports = app => {
    const vendor_stock = require("../controllers/vendor_stock.controller");
    var router = require("express").Router();
  
    // Create a new vendor_stock
    router.post("/", vendor_stock.create);
  
    // Retrieve all vendor_stocks
    router.get("/", vendor_stock.findAll);
  
    // Retrieve a single vendor_stock with id
    router.get("/:id", vendor_stock.findOne);
  
    // Update a vendor_stock with id
    router.put("/:id", vendor_stock.update);
  
    // Delete a vendor_stock with id
    router.delete("/:id", vendor_stock.delete);

  
    app.use('/api/v1/board', router);
  };
  