module.exports = app => {
  const institution_profile = require("../controllers/institution-profile.controller.js");
  var router = require("express").Router();

  // Create a new City
  router.post("/", institution_profile.create);

  // Retrieve all Cities
  router.get("/", institution_profile.findAll);

  // Retrieve all published Cities
  router.get("/activated", institution_profile.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", institution_profile.findOne);

  // Update a City with id
  router.put("/:id", institution_profile.update);

  // Delete a City with id
  router.delete("/:id", institution_profile.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/institution-profile', router);
};
