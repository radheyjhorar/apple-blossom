module.exports = app => {
    const cities = require("../controllers/cities.controller");
    var router = require("express").Router();
  
    // Create a new city
    router.post("/", cities.create);
  
    // Retrieve all cities
    router.get("/", cities.findAll);
  
    // Retrieve a single cities with id
    router.get("/:id", cities.findOne);
  
    // Update a cities with id
    router.put("/:id", cities.update);
  
    // Delete a cities with id
    router.delete("/:id", cities.delete);
  
    app.use('/api/v1/cities', router);
  };
  