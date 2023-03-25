module.exports = app => {
  const role = require("../controllers/role.controller.js");
  var router = require("express").Router();

  // Create a new City
  router.post("/", role.create);

  // Retrieve all Cities
  router.get("/", role.findAll);

  // Retrieve all published Cities
  router.get("/activated", role.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", role.findOne);

  // Update a City with id
  router.put("/:id", role.update);

  // Delete a City with id
  router.delete("/:id", role.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/role', router);
};
