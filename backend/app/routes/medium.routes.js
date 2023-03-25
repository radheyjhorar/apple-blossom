module.exports = app => {
  const medium = require("../controllers/medium.controller");
  var router = require("express").Router();

  // Create a new City
  router.post("/", medium.create);

  // Retrieve all Cities
  router.get("/",medium.findAll);

  // Retrieve all published Cities
  router.get("/activated", medium.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id",medium.findOne);

  // Update a City with id
  router.put("/:id",medium.update);

  // Delete a City with id
  router.delete("/:id",medium.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/medium', router);
};
