
module.exports = app => {
  const { verifySignUp } = require("../../middleware");
const auth = require("../../controllers/frontend/auth.controller.js");
var router = require("express").Router();
 
  router.post(
    "/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    auth.signup
  );

  router.post("/signin", auth.signin);
  router.post("/refreshtoken", auth.refreshToken);
  
  app.use('/api/v1/frontend/auth', router);
};