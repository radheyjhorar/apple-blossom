module.exports = app => {
  const inst_language = require("../controllers/inst-language.controller.js");
  var router = require("express").Router();

  // Create a new inst_language
  router.post("/", inst_language.create);

  // Retrieve all languages
  router.get("/", inst_language.findAll);

  // Retrieve all published languages
  router.get("/activated", inst_language.findAllPublished);

  // Retrieve a single language with id
  router.get("/:id", inst_language.findOne);

  // Update a language with id
  router.put("/:id", inst_language.update);

  // Delete a language with id
  router.delete("/:id", inst_language.delete);

  // Delete all languages
  //router.delete("/", inst_language.deleteAll);

  app.use('/api/v1/inst-language', router);
};
