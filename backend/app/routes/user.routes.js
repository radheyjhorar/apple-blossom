module.exports = app => {
  const user = require("../controllers/user.controller.js");
  var router = require("express").Router();
  const { authJwt } = require("../middleware");

  // Create a new City
  router.post("/", user.create);

  // Retrieve all Cities
  router.get("/", user.findAll);

  // Retrieve all published Cities
  router.get("/activated", user.findAllPublished);

  // Retrieve a single City with id
 // router.get("/:id", user.findOne);

  // Update a City with id
  router.put("/:id", user.update);

  // Delete a City with id
  router.delete("/:id", user.delete);

  // Delete all Cities
  //router.delete("/", city.deleteAll);

  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.get("/all", user.allAccess);

  router.get(
    "/user",
    [authJwt.verifyToken],
    user.userBoard
  );

  router.get(
    "/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    user.moderatorBoard
  );

  router.get(
    "/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    user.adminBoard
  );

  app.use('/api/v1/user', router);
};
