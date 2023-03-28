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


require("./app/routes/customer_order_item.routes")(app);
require("./app/routes/customer_order.routes")(app);
require("./app/routes/customer_payment_history.routes")(app);
require("./app/routes/customer.routes")(app);
require("./app/routes/vendor_payment_history.routes")(app);
require("./app/routes/vendor_stock.routes")(app);
require("./app/routes/vendor.routes")(app);


global.__basedir = __dirname;
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
