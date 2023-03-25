module.exports = app => {
  const state = require("../controllers/state.controller.js");
  var router = require("express").Router();

  // Create a new City
  router.post("/", state.create);

  // Retrieve all Cities
  router.post("/getAll", state.findAll);

  // Retrieve all published Cities
  router.get("/activated", state.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", state.findOne);

  // Update a City with id
  router.put("/:id", state.update);

  // Delete a City with id
  router.delete("/:id", state.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/state', router);
};
