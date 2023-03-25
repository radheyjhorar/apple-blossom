module.exports = app => {
  const institution_type = require("../controllers/institution-type.controller");
  var router = require("express").Router();

  // Create a new City
  router.post("/", institution_type.create);

  // Retrieve all Cities
  router.get("/", institution_type.findAll);

  // Retrieve all published Cities
  router.get("/activated", institution_type.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", institution_type.findOne);

  // Update a City with id
  router.put("/:id", institution_type.update);

  // Delete a City with id
  router.delete("/:id", institution_type.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/institution-type', router);
};
