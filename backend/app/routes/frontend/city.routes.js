module.exports = app => {
  const city = require("../../controllers/frontend/city.controller.js");
  var router = require("express").Router();

  // Retrieve all Cities
  router.get("/", city.findAllPublished);

  app.use('/api/v1/frontend/city', router);
};
