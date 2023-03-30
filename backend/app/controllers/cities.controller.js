const { globalMastersDB } = require("../models");
const cities = globalMastersDB.cities;
const Op = globalMastersDB.Sequelize.Op;


// Create and Save a new Vendor
exports.create = (req, res) => {
  // Validate request
  if (!req.body.city_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a citiesData
  const citiesData = {
    city_name: req.body.city_name,
    state_id: req.body.state_id,
  };

  // Save citiesData in the database
  cities.create(citiesData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the city."
      });
    });
};

// Retrieve all cities from the database.
exports.findAll = (req, res) => {
  cities.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving city."
      });
    });
};

// Find a single City with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  cities.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find city with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving city with id=" + id
      });
    });
};

// Update a city by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  cities.update(req.body.cities, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "city was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update city with id=${id}. Maybe city was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating city with id=" + id
      });
    });
};

// Delete a city with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  cities.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "city was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete city with id=${id}. Maybe city was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete city with id=" + id
      });
    });
};

// Delete all cities from the database.
exports.deleteAll = (req, res) => {
  cities.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} cities were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all cities."
      });
    });
};

