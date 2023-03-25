module.exports = app => {
  const institution_board = require("../controllers/institution-board.controller");
  var router = require("express").Router();

  // Create a new City
  router.post("/", institution_board.create);

  // Retrieve all Cities
  router.get("/", institution_board.findAll);

  // Retrieve all published Cities
  router.get("/activated", institution_board.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", institution_board.findOne);

  // Update a City with id
  router.put("/:id", institution_board.update);

  // Delete a City with id
  router.delete("/:id", institution_board.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/institution-board', router);
};
