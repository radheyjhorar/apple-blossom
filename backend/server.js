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
const Cities = globalMastersDB.cities;
const States = globalMastersDB.states;
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
   inital();
 });

 function inital() {
  // States.create({
  //   id: 1,
  //   state_name: "Rajasthan"
   
  // });
  // States.create({
  //   id: 2,
  //   state_name: "Haryana"
   
  // });
  // States.create({
  //   id: 3,
  //   state_name: "Punjab"
   
  // });
  // Cities.create({
  //   id: 1,
  //   city_name: "Sri Ganganagar",
  //   state_id: 1
  // });
  // Cities.create({
  //   id: 2,
  //   city_name: "Hanumangarh",
  //   state_id: 1
  // });
  // Cities.create({
  //   id: 3,
  //   city_name: "Sangaria",
  //   state_id: 1
  // });
  // Cities.create({
  //   id: 4,
  //   city_name: "Hisar",
  //   state_id: 2
  // });
  // Cities.create({
  //   id: 5,
  //   city_name: "Bathinda",
  //   state_id: 3
  // });
  Role.create({
    id: 1,
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



// simple route
app.get("/", (req, res) => {
  //sendEmail.sendEmail();
  
  res.json({ message:  prprint});
 //res.json({ message: "Welcome to WayToEducation." });
});

require("./app/routes/auth.routes")(app);
require("./app/routes/customer_order_item.routes")(app);
require("./app/routes/customer_order.routes")(app);
require("./app/routes/customer_payment_history.routes")(app);
require("./app/routes/customer.routes")(app);
require("./app/routes/vendor_payment_history.routes")(app);
require("./app/routes/vendor_stock.routes")(app);
require("./app/routes/vendor.routes")(app);
require("./app/routes/cities.routes")(app);
require("./app/routes/states.routes")(app);
require("./app/routes/order_status.routes")(app);
require("./app/routes/dashboard.routes")(app);



global.__basedir = __dirname;
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
