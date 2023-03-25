module.exports = app => {
  const country = require("../controllers/country.controller.js");
  var router = require("express").Router();

  // Create a new City
  router.post("/", country.create);

  // Retrieve all Cities
  router.post("/getAll", country.findAll);

  // Retrieve all published Cities
  router.get("/activated", country.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", country.findOne);

  // Update a City with id
  router.put("/:id", country.update);

  // Delete a City with id
  router.delete("/:id", country.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/country', router);
};
