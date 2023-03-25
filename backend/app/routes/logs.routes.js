module.exports = app => {
  const logs = require("../controllers/logs.controller.js");
  var router = require("express").Router();

  // Create a new City
  router.post("/", logs.create);

  // Retrieve all Cities
  router.get("/", logs.findAll);

  app.use('/api/v1/logs', router);

};
