const { globalMastersDB } = require("../models");
const Country = globalMastersDB.country;
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
  const country = {
    name: req.body.name,
    official_name: req.body.name ? req.body.name : null,
    is_active: req.body.is_active ? req.body.is_active : 0,

  };

  // Save Salutation in the database
  Country.create(country)
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
  //const name = req.query.name;
  //var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
  let where = {};
  if(req.body.is_active != null) {
      where.is_active = req.body.is_active
  }

  let attributes = req.body.attributes; 
  if(attributes == null) {
    attributes = ['id', 'name', 'official_name', 'is_active', 'created_at', 'modified_at']
  }

  Country.findAll({
    attributes: attributes,
    where: where
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Country."
      });
    });
};

// Find a single Country with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Country.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Country with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Country with id=" + id
      });
    });
};

// Update a Country by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  
  Country.update(req.body.country, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Country was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Country with id=${id}. Maybe Country was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Country with id=" + id
      });
    });
};

// Delete a Country with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Country.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Country was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Country with id=${id}. Maybe Country was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Country with id=" + id
      });
    });
};

// Delete all Countrys from the database.
exports.deleteAll = (req, res) => {
  Country.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Countrys were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Countrys."
      });
    });
};

// find all published Countrys
exports.findAllPublished = (req, res) => {
  Country.findAll({ where: { is_active: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Countrys."
      });
    });
};
