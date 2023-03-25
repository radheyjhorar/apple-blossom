 module.exports = app => {
  const payment = require("../../controllers/frontend/payment.controller.js");
  var router = require("express").Router();


  // Retrieve all Cities
  router.post("/success", payment.success);

  // Retrieve a single City with id
  router.post("/orders", payment.orders);

  

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/frontend/payment', router);
};
