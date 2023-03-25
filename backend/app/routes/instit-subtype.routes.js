module.exports = app => {
  const instit_subtype = require("../controllers/instit-subtype.controller");
  var router = require("express").Router();

  // Create a new City
  router.post("/", instit_subtype.create);

  // Retrieve all Cities
  router.get("/", instit_subtype.findAll);

  // Retrieve all published Cities
  router.get("/activated", instit_subtype.findAllPublished);

  // Retrieve a single City with id
  router.get("/:id", instit_subtype.findOne);

  // Update a City with id
  router.put("/:id", instit_subtype.update);

  // Delete a City with id
  router.delete("/:id", instit_subtype.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/instit-subtype', router);
};
