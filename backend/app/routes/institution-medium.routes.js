module.exports = app => {
  const institution_medium = require("../controllers/institution-medium.controller");
  var router = require("express").Router();

  // Create a new City
  router.post("/", institution_medium.create);

  // Retrieve all Cities
  router.get("/", institution_medium.findAll);

  // Retrieve all published Cities
  router.get("/activated", institution_medium.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", institution_medium.findOne);

  // Update a City with id
  router.put("/:id", institution_medium.update);

  // Delete a City with id
  router.delete("/:id", institution_medium.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/institution-medium', router);
};
