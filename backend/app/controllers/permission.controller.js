const { globalMastersDB } = require("../models");
const Permission = globalMastersDB.permission;
const Op = globalMastersDB.Sequelize.Op;

// Create and Save a new permission
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a permission
  const permission = {
    name: req.body.name,
    description: req.body.description,
    is_active: req.body.is_active ? req.body.is_active : 0,
  };

  // Save permission in the database
  Permission.create(permission)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the permission."
      });
    });
};

// Retrieve all permission from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Permission.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving permission."
      });
    });
};

// Find a single permission with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Permission.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find permission with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving permission with id=" + id
      });
    });
};

// Update a permission by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Permission.update(req.body.permission, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "permission was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update permission with id=${id}. Maybe permission was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating permission with id=" + id
      });
    });
};

// Delete a permission with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Permission.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Permission was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete permission with id=${id}. Maybe City was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete permission with id=" + id
      });
    });
};

// Delete all permission from the database.
exports.deleteAll = (req, res) => {
  Permission.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Permission were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all permission."
      });
    });
};

// find all published permission
exports.findAllPublished = (req, res) => {
  Permission.findAll({ where: { is_active: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving permission."
      });
    });
};
