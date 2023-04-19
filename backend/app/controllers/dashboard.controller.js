const { globalMastersDB } = require("../models");
const customer = globalMastersDB.customer;
const cities = globalMastersDB.cities;
const Op = globalMastersDB.Sequelize.Op;


// Retrieve all customers from the database.
exports.findAll = (req, res) => {
  let where = {};
  if (req.body.is_delete != null) {
    where.is_delete = req.body.is_delete
  }
  
  let attributes = req.body.attributes; 
  if(attributes == null) {
    attributes = ['id', 'name', 'address', 'city', 'state', 'mobile1', 'mobile2', 'ledger_no', 'createdAt', 'updatedAt', 'is_delete']
  }

  let include = [];
  if(req.body.include) {
    include =  [{
      model: cities,
      as: 'customer_city',
      attributes: ['city_name']      
    }];
  }

    customer.findAll({
      attributes: attributes,
      include: include,
      where: where
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    });
};
