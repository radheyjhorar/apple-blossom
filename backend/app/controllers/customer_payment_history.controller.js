const { globalMastersDB } = require("../models");
const customer_payment_history = globalMastersDB.customer_payment_history;
const Op = globalMastersDB.Sequelize.Op;


// Create and Save a new Vendor
exports.create = (req, res) => {
  // Validate request
  if (!req.body.customer_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a customer_payment_historyData
  const customer_payment_historyData = {
    customer_id: req.body.customer_id,
    payment_date: req.body.payment_date,
    deposit_amount: req.body.deposit_amount,
    resipte_no: req.body.resipte_no,
  };

  // Save customer_payment_historyData in the database
  customer_payment_history.create(customer_payment_historyData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the customer_payment_history."
      });
    });
};

// Retrieve all customer from the database.
exports.findAll = (req, res) => {
    customer_payment_history.findAll({
      where: { is_delete: 0}
})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving history."
      });
    });
};

// Find a single history with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  customer_payment_history.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find customer_payment_history with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving customer_payment_history with id=" + id
      });
    });
};

// Update a customer payment history by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  customer_payment_history.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "customer payment history was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update customer payment history with id=${id}. Maybe customer payment history was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating customer payment history with id=" + id
      });
    });
};

// Delete a customer payment history with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  customer_payment_history.update({is_delete: 1}, {
  //customer_payment_history.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "customer payment history was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete customer payment history with id=${id}. Maybe customer payment history was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete customer payment history with id=" + id
      });
    });
};

