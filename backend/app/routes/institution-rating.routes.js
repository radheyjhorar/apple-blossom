module.exports = app => {
  const institution_rating = require("../controllers/institution-rating.controller");
  var router = require("express").Router();

  // Create a new City
  router.post("/", institution_rating.create);

  // Retrieve all Cities
  router.get("/", institution_rating.findAll);

  // Retrieve all published Cities
  router.get("/activated", institution_rating.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", institution_rating.findOne);

  // Update a City with id
  router.put("/:id", institution_rating.update);

  // Delete a City with id
  router.delete("/:id", institution_rating.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/institution-rating', router);
};
