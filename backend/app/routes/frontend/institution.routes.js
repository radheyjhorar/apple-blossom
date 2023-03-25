 module.exports = app => {
  const institution = require("../../controllers/frontend/institution.controller.js");
  var router = require("express").Router();


  // Retrieve all Cities
  router.post("/", institution.findAll);

  // Retrieve a single City with id
  //router.get("/search-filter", institution.searchFilter);


  // Retrieve a single City with id
  router.get("/:id", institution.findOne);

  

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  app.use('/api/v1/frontend/institution', router);
};
