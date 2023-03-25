module.exports = app => {
  const permission = require("../controllers/permission.controller.js");
  var router = require("express").Router();

  // Create a new City
  router.post("/", permission.create);

  // Retrieve all Cities
  router.get("/", permission.findAll);

  // Retrieve all published Cities
  router.get("/activated", permission.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", permission.findOne);

  // Update a City with id
  router.put("/:id", permission.update);

  // Delete a City with id
  router.delete("/:id", permission.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/permission', router);
};
