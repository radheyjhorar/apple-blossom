module.exports = app => {
  const job = require("../controllers/job.controller");
  var router = require("express").Router();

  // Create a new City
  router.post("/", job.create);

  // Retrieve all Cities
  router.get("/", job.findAll);

  // Retrieve all published Cities
  router.get("/activated", job.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", job.findOne);

  // Update a City with id
  router.put("/:id", job.update);

  // Delete a City with id
  router.delete("/:id", job.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/job', router);
};
