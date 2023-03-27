module.exports = app => {
  const vendor = require("../controllers/vendor.controller");
  var router = require("express").Router();

  // Create a new vendor
  router.post("/", vendor.create);

  // Retrieve all vendors
  router.get("/", vendor.findAll);

  // Retrieve a single vendor with id
  router.get("/:id", vendor.findOne);

  // Update a vendor with id
  router.put("/:id", vendor.update);

  // Delete a vendor with id
  router.delete("/:id", vendor.delete);

  // Delete all vendors
  router.deleteAll("/", vendor.deleteAll);

  app.use('/api/v1/board', router);
};
