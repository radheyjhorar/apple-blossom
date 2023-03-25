module.exports = app => {
  const language = require("../controllers/language.controller.js");
  var router = require("express").Router();

  // Create a new language
  router.post("/", language.create);

  // Retrieve all languages
  router.get("/", language.findAll);

  // Retrieve all published languages
  router.get("/activated", language.findAllPublished);

  // Retrieve a single language with id
  router.get("/:id", language.findOne);

  // Update a language with id
  router.put("/:id", language.update);

  // Delete a language with id
  router.delete("/:id", language.delete);

  // Delete all languages
  //router.delete("/", language.deleteAll);

  app.use('/api/v1/language', router);
};
