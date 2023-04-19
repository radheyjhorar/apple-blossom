module.exports = app => {
    const dashboard = require("../controllers/customer.controller");
    var router = require("express").Router();
  

    // Retrieve all customers
    router.post("/getAll", dashboard.findAll);
  
  

  
    app.use('/api/v1/dashboard', router);
  };
  