const { globalMastersDB } = require("../models");
const language = globalMastersDB.language;
const Op = globalMastersDB.Sequelize.Op;
const Sequelize = require("sequelize");


// Create and Save a new language
exports.create = (req, res) => {
  // Validate request
  console.log(req.body);


  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a language
  const Language = {
    name: req.body.name,
    is_active: req.body.is_active ? req.body.is_active : 0,

  };

  // Save language in the database
  language.create(Language)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the language."
      });
    });
};

// Retrieve all Cities from the database.
exports.findAll = async (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  language.findAll()
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

// Find a single language with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log('paan' + id);
  language.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find language with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving language with id=" + id
      });
    });
};

// Update a language by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  language.update(req.body.language, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "language was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update language with id=${id}. Maybe language was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating language with id=" + id
      });
    });
};

// Delete a language with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  language.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "language was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete language with id=${id}. Maybe language was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete language with id=" + id
      });
    });
};

// Delete all Cities from the database.
exports.deleteAll = (req, res) => {
  language.destroy({
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

// find all published language
exports.findAllPublished = (req, res) => {
  language.findAll({ where: { is_active: true } })
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
