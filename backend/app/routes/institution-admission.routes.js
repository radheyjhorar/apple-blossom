module.exports = app => {
  const Institution_admission = require("../controllers/institution-admission.controller");
  var router = require("express").Router();

  // Create a new City
  router.post("/", Institution_admission.create);

  // Retrieve all Cities
  router.get("/", Institution_admission.findAll);

  // Retrieve all published Cities
  router.get("/activated", Institution_admission.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", Institution_admission.findOne);

  // Update a City with id
  router.put("/:id", Institution_admission.update);

  // Delete a City with id
  router.delete("/:id", Institution_admission.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/institution-admission', router);
};
