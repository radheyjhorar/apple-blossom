const { globalMastersDB } = require("../models");
const Salutation = globalMastersDB.salutation;
const Op = globalMastersDB.Sequelize.Op;

// Create and Save a new Salutation
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Salutation
  const salutation = {
    name: req.body.name,
    is_active: req.body.is_active ? req.body.is_active : 0,

  };

  // Save Salutation in the database
  Salutation.create(salutation)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Salutation."
      });
    });
};

// Retrieve all Salutations from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Salutation.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Salutation."
      });
    });
};

// Find a single Salutation with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Salutation.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Salutation with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Salutation with id=" + id
      });
    });
};

// Update a Salutation by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  Salutation.update(req.body.salutation, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Salutation was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Salutation with id=${id}. Maybe Salutation was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Salutation with id=" + id
      });
    });
};

// Delete a Salutation with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Salutation.destroy({
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

// Delete all Salutations from the database.
exports.deleteAll = (req, res) => {
  Salutation.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Cities were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all salutations."
      });
    });
};

// find all published Salutation
exports.findAllPublished = (req, res) => {
  Salutation.findAll({ where: { is_active: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving salutations."
      });
    });
};
