const { institutionsDB } = require("../models");
const Institution_rating = institutionsDB.institution_rating;
const Op = institutionsDB.Sequelize.Op;


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
  const institution_rating = {
    inst_id: req.body.inst_id,
    review: req.body.review,
    rating: req.body.rating,
    is_active: req.body.is_active ? req.body.is_active : 0,

  };

  // Save City in the database
  Institution_rating.create(institution_media)
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

  Institution_rating.findAll()
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

  Institution_rating.findByPk(id)
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

  Institution_rating.update(req.body, {
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

  Institution_rating.destroy({
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
  Institution_rating.destroy({
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
  Institution_rating.findAll({ where: { is_active: true } })
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
