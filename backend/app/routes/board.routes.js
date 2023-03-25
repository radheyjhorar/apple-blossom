module.exports = app => {
  const board = require("../controllers/board.controller");
  var router = require("express").Router();

  // Create a new City
  router.post("/", board.create);

  // Retrieve all Cities
  router.get("/", board.findAll);

  // Retrieve all published Cities
  router.get("/activated", board.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", board.findOne);

  // Update a City with id
  router.put("/:id", board.update);

  // Delete a City with id
  router.delete("/:id", board.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/board', router);
};
