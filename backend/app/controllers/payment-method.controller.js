const { globalMastersDB } = require("../models");
const Payment_Method = globalMastersDB.payment_method;
const Op = globalMastersDB.Sequelize.Op;


// Create and Save a new payment_method
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a payment_method
  const payment_method = {
    name: req.body.name,
    env_name: req.body.env_name,
    api_key: req.body.api_key,
    api_token: req.body.api_token,
    is_active: req.body.is_active ? req.body.is_active : 0,

  };

  // Save payment_method in the database
  Payment_Method.create(payment_method)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the payment_method."
      });
    });
};

// Retrieve all payment_methods from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Payment_Method.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving payment_method."
      });
    });
};

// Find a single payment_method with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Payment_Method.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find payment_method with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving payment_method with id=" + id
      });
    });
};

// Update a payment_method by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
 
  Payment_Method.update(req.body.payment_method, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "payment_method was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update payment_method with id=${id}. Maybe payment_method was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating payment_method with id=" + id
      });
    });
};

// Delete a payment_method with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Payment_Method.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "payment_method was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete payment_method with id=${id}. Maybe payment_method was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete payment_method with id=" + id
      });
    });
};

// Delete all payment_methods from the database.
exports.deleteAll = (req, res) => {
  Payment_Method.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} payment_methods were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all payment_methods."
      });
    });
};

// find all published payment_method
exports.findAllPublished = (req, res) => {
  Payment_Method.findAll({ where: { is_active: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving payment_methods."
      });
    });
};
