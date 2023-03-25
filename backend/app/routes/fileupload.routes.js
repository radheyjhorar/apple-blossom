module.exports = app => {
  const fileupload = require("../controllers/fileupload.controller.js");
  var router = require("express").Router();

  // Create a new City
  router.post("/",  fileupload.upload);

  router.get("/", fileupload.getListFiles);

  router.get("/:name", fileupload.download);

  app.use('/api/v1/file', router);
};
