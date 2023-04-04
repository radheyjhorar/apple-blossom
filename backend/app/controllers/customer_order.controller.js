const { globalMastersDB } = require("../models");
const customer_order = globalMastersDB.customer_order;
const Op = globalMastersDB.Sequelize.Op;


// Create and Save a new customer_order
exports.create = (req, res) => {
  // Validate request
  if (!req.body.customer_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a customer_orderData
  const customer_orderData = {
    customer_id: req.body.customer_id,
    order_description: req.body.order_description,
    total_amount: req.body.total_amount,
    order_status: req.body.order_status,
  };

  // Save customer_orderData in the database
  customer_order.create(customer_orderData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the customer_order."
      });
    });
};

// Retrieve all customer_order from the database.
exports.findAll = (req, res) => {
    customer_order.findAll({
      where: { is_delete: 0}
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customer_order."
      });
    });
};

// Find a single customer_order with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  customer_order.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find customer_order with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving customer_order with id=" + id
      });
    });
};

// Update a customer_order by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  customer_order.update(req.body.customer_order, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "customer_order was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update customer_order with id=${id}. Maybe customer_order was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating customer_order with id=" + id
      });
    });
};

// Delete a customer order with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  customer_order.update({is_delete: 1}, {
  //customer_order.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "customer order was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete customer order with id=${id}. Maybe customer order was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete customer order with id=" + id
      });
    });
};

// Delete all customer_orders from the database.
exports.deleteAll = (req, res) => {
    customer_order.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} customer_order were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all customer_order."
      });
    });
};

