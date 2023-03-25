 module.exports = app => {
  const institution_contact = require("../controllers/institution-contact.controller.js");
  var router = require("express").Router();

  // Create a new City
  router.post("/", institution_contact.create);

  // Retrieve all Cities
  router.post("/getAll", institution_contact.findAll);

  // Retrieve all published Cities
  router.get("/activated", institution_contact.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", institution_contact.findOne);

  // Update a City with id
  router.put("/:id", institution_contact.update);

  // Delete a City with id
  router.delete("/:id", institution_contact.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/institution-contact', router);
};
