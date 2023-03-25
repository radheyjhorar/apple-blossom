module.exports = app => {
  const city = require("../controllers/city.controller.js");
  var router = require("express").Router();

  // Create a new City
  router.post("/", city.create);

  // Retrieve all Cities
  router.post("/getAll", city.findAll);

  // Retrieve all published Cities
  router.get("/activated", city.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", city.findOne);

  // Update a City with id
  router.put("/:id", city.update);

  // Delete a City with id
  router.delete("/:id", city.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/city', router);
};
