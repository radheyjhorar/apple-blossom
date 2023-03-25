const { globalMastersDB } = require("../models");
const Role = globalMastersDB.role;
const Op = globalMastersDB.Sequelize.Op;

// Create and Save a new Role.
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Role
  const user = {
    name: req.body.name,
    is_active: req.body.is_active ? req.body.is_active : 0,
  };

  // Save Salutation in the database
  Role.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Role."
      });
    });
};

// Retrieve all role from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Role.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Role."
      });
    });
};

// Find a single role with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Role.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find role with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving role with id=" + id
      });
    });
};

// Update a role by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Role.update(req.body.role, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "role was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update role with id=${id}. Maybe role was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating role with id=" + id
      });
    });
};

// Delete a role with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Role.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Role was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe City was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

// Delete all role from the database.
exports.deleteAll = (req, res) => {
  Role.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Role were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all User."
      });
    });
};

// find all published Role
exports.findAllPublished = (req, res) => {
  Role.findAll({ where: { is_active: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Role."
      });
    });
};
