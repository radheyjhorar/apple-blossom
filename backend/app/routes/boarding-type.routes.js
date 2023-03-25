module.exports = app => {
  const boarding_type = require("../controllers/boarding-type.controller.js");
  var router = require("express").Router();

  // Create a new City
  router.post("/", boarding_type.create);

  // Retrieve all Cities
  router.post("/getAll", boarding_type.findAll);

  // Retrieve all published Cities
  router.get("/activated", boarding_type.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", boarding_type.findOne);

  // Update a City with id
  router.put("/:id", boarding_type.update);

  // Delete a City with id
  router.delete("/:id", boarding_type.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/boarding_type', router);
};
