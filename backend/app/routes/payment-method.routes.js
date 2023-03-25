module.exports = app => {
  const payment_method = require("../controllers/payment-method.controller");
  var router = require("express").Router();

  // Create a new payment_method
  router.post("/", payment_method.create);

  // Retrieve all payment_methods
  router.get("/", payment_method.findAll);

  // Retrieve all published payment_methods
  router.get("/activated", payment_method.findAllPublished);

  // Retrieve a single payment_method with id
  router.get("/:id", payment_method.findOne);

  // Update a payment_method with id
  router.put("/:id", payment_method.update);

  // Delete a payment_method with id
  router.delete("/:id", payment_method.delete);

  // Delete all payment_methods
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/payment-method', router);
};
