module.exports = app => {
    const states = require("../controllers/states.controller");
    var router = require("express").Router();
  
    // Create a new state
    router.post("/", states.create);
  
    // Retrieve all states
    router.get("/", states.findAll);
  
    // Retrieve a single states with id
    router.get("/:id", states.findOne);
  
    // Update a states with id
    router.put("/:id", states.update);
  
    // Delete a states with id
    router.delete("/:id", states.delete);
  
    app.use('/api/v1/states', router);
  };
  