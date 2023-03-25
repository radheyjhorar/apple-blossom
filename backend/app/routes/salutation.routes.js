module.exports = app => {
  const salutation = require("../controllers/salutation.controller.js");
  var router = require("express").Router();

  // Create a new City
  router.post("/", salutation.create);

  // Retrieve all Cities
  router.get("/", salutation.findAll);

  // Retrieve all published Cities
  router.get("/activated", salutation.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", salutation.findOne);

  // Update a City with id
  router.put("/:id", salutation.update);

  // Delete a City with id
  router.delete("/:id", salutation.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/salutation', router);
};
