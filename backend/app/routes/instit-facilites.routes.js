module.exports = app => {
  const instit_facilites = require("../controllers/instit-facilites.controller");
  var router = require("express").Router();

  // Create a new City
  router.post("/", instit_facilites.create);

  // Retrieve all Cities
  router.get("/", instit_facilites.findAll);

  // Retrieve all published Cities
  router.get("/activated", instit_facilites.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", instit_facilites.findOne);

  // Update a City with id
  router.put("/:id", instit_facilites.update);

  // Delete a City with id
  router.delete("/:id", instit_facilites.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/instit-facilites', router);
};
