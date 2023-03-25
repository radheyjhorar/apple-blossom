module.exports = app => {
  const institution_own = require("../controllers/institution-own.controller");
  var router = require("express").Router();

  // Create a new City
  router.post("/", institution_own.create);

  // Retrieve all Cities
  router.get("/", institution_own.findAll);

  // Retrieve all published Cities
  router.get("/activated", institution_own.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", institution_own.findOne);

  // Update a City with id
  router.put("/:id", institution_own.update);

  // Delete a City with id
  router.delete("/:id", institution_own.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/institution-own', router);
};
