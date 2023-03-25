const { globalMastersDB } = require("../models");
const City = globalMastersDB.city;
const Countries = globalMastersDB.country;
const States = globalMastersDB.state;
const Op = globalMastersDB.Sequelize.Op;
const Sequelize = require("sequelize");


// Create and Save a new City
exports.create = (req, res) => {
  // Validate request
  console.log(req.body);


  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a City
  const city = {
    name: req.body.name,
    country_id: req.body.country_id,
    state_id: req.body.state_id,
    is_active: req.body.is_active ? req.body.is_active : 0,

  };

  // Save City in the database
  City.create(city)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the City."
      });
    });
};

// Retrieve all Cities from the database.
exports.findAll = async (req, res) => {

  try {
    let where = {};
    if (req.body.is_active != null) {
      where.is_active = req.body.is_active
    }
    if (req.body.state_id != null) {
      where.state_id = req.body.state_id
    }
    let attributes = req.body.attributes; 
    if(attributes == null) {
      attributes = ['id', 'name', 'country_id', 'state_id', 'is_active', 'created_at', 'modified_at']
    }
 
    let include = [];
    if(req.body.include) {
      include = [{
        model: Countries,
        attributes: ['name']
      },
      {
        model: States,
        attributes: ['name']
      }];
    }

    City.findAll({
      include: include,
      attributes: attributes,
      where: where
    })
    .then((cities) => {
      return res.status(200).json(cities)

    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ 'error': 'internal server error' })

  }
};

// Find a single City with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log('paan' + id);
  City.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find City with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving City with id=" + id
      });
    });
};

// Update a City by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  City.update(req.body.city, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "City was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update City with id=${id}. Maybe City was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating City with id=" + id
      });
    });
};

// Delete a City with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  City.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "City was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete City with id=${id}. Maybe City was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete City with id=" + id
      });
    });
};

// Delete all Cities from the database.
exports.deleteAll = (req, res) => {
  City.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Cities were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all citirs."
      });
    });
};

// find all published City
exports.findAllPublished = (req, res) => {
  City.findAll({ where: { is_active: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cities."
      });
    });
};
