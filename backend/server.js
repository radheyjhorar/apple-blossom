const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

const sendEmail =  require('./app/helpers/email');
const prettyUrl =  require('./app/helpers/preety-url');

var corsOptions = {
  origin: "http://localhost:4200"
};



app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const { globalMastersDB, institutionsDB } = require("./app/models");
const Role = globalMastersDB.role;

/* globalMastersDB.sequelize.sync()
  .then(() => {
    console.log("Synced db.ss");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
*/

// // drop the table if it already exists
globalMastersDB.sequelize.sync({ force: false }).then(() => {
   console.log("Drop and re-sync db.");
  // initial();
 });

 function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

 /*institutionsDB.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });*/


// // drop the table if it already exists
institutionsDB.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});

// simple route
app.get("/", (req, res) => {
  //sendEmail.sendEmail();
  title=[
    "AG DAV Centenary Public School",
    "Aadhar International School",
    "Aadharshila Vidyapeeth",
    "Aadyant Global School",
    "Abhinav Public Sr Sec School",
    "AD Senior Secondary School",
    "Aakash Model Sr Sec School",
    "Adarsh Jain Dharmic Shiksha Sadan",
    "Adarsh Model School",
    "Adarsh Public School",
    "Adarsh Public School",
    "Adarsh Montessori School",
    "Adarsh Secondary School",
    "Aggarwal Public School",
    "Ahlcon International School",
    "Air Force Bal Bharti School"
  ];
  prprint = [];
  title.forEach(element => {
    console.log(element);
     prprint.push(prettyUrl.prettyUrl(element));
  });
  
  res.json({ message:  prprint});
 //res.json({ message: "Welcome to WayToEducation." });
});

require("./app/routes/city.routes")(app);
require("./app/routes/salutation.routes")(app);
require("./app/routes/country.routes")(app);
require("./app/routes/state.routes")(app);
require('./app/routes/auth.routes')(app);
require("./app/routes/user.routes")(app);
require("./app/routes/board.routes")(app);
require("./app/routes/medium.routes")(app);
require("./app/routes/role.routes")(app);
require("./app/routes/permission.routes")(app);
require("./app/routes/payment-method.routes")(app);
require("./app/routes/boarding-type.routes")(app);
require("./app/routes/institution-admission.routes")(app);
require("./app/routes/institution-type.routes")(app);
require("./app/routes/instit-subtype.routes")(app);
require("./app/routes/institution-board.routes")(app);
require("./app/routes/institution-medium.routes")(app);
require("./app/routes/institution-contact.routes")(app);
require("./app/routes/institution-profile.routes")(app);
require("./app/routes/institution-facility.routes")(app);
require("./app/routes/institution-own.routes")(app);
require("./app/routes/institution-media.routes")(app);
require("./app/routes/institution-rating.routes")(app);
require("./app/routes/institution-admission.routes")(app);
require("./app/routes/instit-facilites.routes")(app);
require("./app/routes/logs.routes")(app);
require("./app/routes/job.routes")(app);
require("./app/routes/fileupload.routes")(app);
require("./app/routes/language.routes")(app);
require("./app/routes/inst_language.routes")(app);
//frontend routes
require("./app/routes/frontend/institution.routes")(app);
require("./app/routes/frontend/city.routes")(app);
require("./app/routes/frontend/jobs.routes")(app);
require("./app/routes/frontend/auth.routes")(app);
require("./app/routes/frontend/payment.routes")(app);

global.__basedir = __dirname;
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
