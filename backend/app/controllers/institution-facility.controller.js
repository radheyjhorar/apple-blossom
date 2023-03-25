const { globalMastersDB } = require("../models");
const Institution_facility = globalMastersDB.institution_facility;
const Op = globalMastersDB.Sequelize.Op;


// Create and Save a new City
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a City
  const institution_facility = {
    name: req.body.name,
    is_active: req.body.is_active ? req.body.is_active : 0,

  };

  // Save City in the database
  Institution_facility.create(institution_facility)
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
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Institution_facility.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Cities."
      });
    });
};

// Find a single City with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Institution_facility.findByPk(id)
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

  Institution_facility.update(req.body.institutionfacility, {
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

  Institution_facility.destroy({
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
  Institution_facility.destroy({
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
  Institution_facility.findAll({ where: { is_active: true } })
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
