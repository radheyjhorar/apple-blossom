module.exports = app => {
  const institution_media = require("../controllers/institution-media.controller");
  var router = require("express").Router();

  // Create a new City
  router.post("/", institution_media.create);

  // Retrieve all Cities
  router.get("/", institution_media.findAll);

  // Retrieve all published Cities
  router.get("/activated", institution_media.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", institution_media.findOne);

  // Update a City with id
  router.put("/:id", institution_media.update);

  // Delete a City with id
  router.delete("/:id", institution_media.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/institution-media', router);
};
