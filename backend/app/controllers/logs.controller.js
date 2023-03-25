const { mongodbConnObj } = require("../models");



// Create and Save a new City
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.event_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a City
  const log = {
    "event_name": req.body.event_name,
    "event_action": req.body.event_action,
    "description": req.body.description,
    "user_name": req.body.user_name,
    "created_at": null

  };

    try {
        const result = await mongodbConnObj.db("waytoedulogs").collection("logs").insertOne(log);
        console.log(`New log created with the following id: ${result.insertedId}`);
    
    }catch(err) {
      console.log(err);
      return res.status(500).json({'error': 'internal server error'})
    
    }
};

// Retrieve all Cities from the database.
exports.findAll = async (req, res) => {
//  const name = req.query.name;
//  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  try {
    var myPromise = () => {
      return new Promise(async (resolve, reject) => {
          const cursor = await mongodbConnObj.db("waytoedulogs").collection("logs").find().toArray();
        //await globalMastersDB.sequelize.query('select * from `cities`')
       
        return res.status(200).json(cursor);
      });
    }

      //await myPromise
   var result = await myPromise();
  
  }catch(err) {
    console.log(err);
    return res.status(500).json({'error': 'internal server error'})

  }
};
