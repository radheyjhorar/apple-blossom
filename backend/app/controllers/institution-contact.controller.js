const { institutionsDB } = require("../models");
const Institution_contact = institutionsDB.institution_contact;
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
  const institution_contact = {
    name: req.body.name,
    insituation_type_id: req.body.insituation_type_id,
    institution_medium_id:req.body.institution_medium_id,
    salutation_id:req.body.salutation_id,
    approx_fees:req.body.approx_fees,
    address: req.body.address,
    country_id: req.body.country_id,
    state_id: req.body.state_id,
    city_id: req.body.city_id,
    pincode: req.body.pincode,
    email: req.body.email,
    mobile: req.body.mobile,
    stdcode: req.body.stdcode,
    fname: req.body.fname,
    lname: req.body.lname,
    designation: req.body.designation,
    telephone_no: req.body.telephone_no,
    website: req.body.website,
    is_active: req.body.is_active ? req.body.is_active : 0,

  };

  // Save City in the database
  Institution_contact.create(institution_contact)
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
  let where = {};
  if(req.body.is_active != null) {
      where.is_active = req.body.is_active
  }
  Institution_contact.findAll({
    where: where
  })
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

  Institution_contact.findByPk(id)
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
  console.log(req.body.institutioncontact);
  Institution_contact.update(req.body.institutioncontact, {
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

  Institution_contact.destroy({
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
  Institution_contact.destroy({
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
  Institution_contact.findAll({ where: { is_active: true } })
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
