module.exports = app => {
  const institution_facility = require("../controllers/institution-facility.controller");
  var router = require("express").Router();

  // Create a new City
  router.post("/", institution_facility.create);

  // Retrieve all Cities
  router.get("/", institution_facility.findAll);

  // Retrieve all published Cities
  router.get("/activated", institution_facility.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", institution_facility.findOne);

  // Update a City with id
  router.put("/:id", institution_facility.update);

  // Delete a City with id
  router.delete("/:id", institution_facility.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/institution-facility', router);
};
