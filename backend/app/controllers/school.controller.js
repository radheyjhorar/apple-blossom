const { institutionsDB } = require("../models");
const School = institutionsDB.school;
const Op = institutionsDB.Sequelize.Op;

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
  const school = {
    name: req.body.name,
    insituation_type_id: req.body.insituation_type_id,
    address1: req.body.address1,
    address2: req.body.address2,
    address3: req.body.address3,
    country_id: req.body.country_id,
    state_id: req.body.state_id,
    city_id: req.body.city_id,
    pincode: req.body.pincode,
    email: req.body.email,
    mobile: req.body.mobile,
    stdcode: req.body.stdcode,
    telephone_no: req.body.telephone_no,
    website: req.body.website,
    is_active: req.body.is_active ? req.body.is_active : 0,

  };

  // Save Salutation in the database
  School.create(state)
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

  School.findAll()
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

  School.findByPk(id)
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

  School.update(req.body, {
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

  School.destroy({
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
  School.destroy({
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
  School.findAll({ where: { is_active: true } })
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
