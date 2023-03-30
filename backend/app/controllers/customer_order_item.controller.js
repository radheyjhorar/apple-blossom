const { globalMastersDB } = require("../models");
const customer_order_item = globalMastersDB.customer_order_item;
const Op = globalMastersDB.Sequelize.Op;


// Create and Save a new customer_order_item
exports.create = (req, res) => {
  // Validate request
  if (!req.body.order_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a customer_order_itemData
  const customer_order_itemData = {
    order_id: req.body.order_id,
    item_name: req.body.item_name,
    item_rate: req.body.item_rate,
    quantity: req.body.quantity,
    amount: req.body.amount,
    item_status: req.body.item_status,
  };

  // Save customer_order_itemData in the database
  customer_order_item.create(customer_order_itemData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the customer_order_item."
      });
    });
};

// Retrieve all customer_order_item from the database.
exports.findAll = (req, res) => {
    customer_order_item.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customer_order_item."
      });
    });
};

// Find a single customer_order_item with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  customer_order_item.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find customer_order_item with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving customer_order_item with id=" + id
      });
    });
};

// Update a customer_order_item by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  customer_order_item.update(req.body.customer_order_item, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "customer_order_item was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update customer_order_item with id=${id}. Maybe customer_order_item was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating customer_order_item with id=" + id
      });
    });
};

// Delete a customer_order_item with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  customer_order_item.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "customer_order_item was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete customer_order_item with id=${id}. Maybe customer_order_item was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete customer_order_item with id=" + id
      });
    });
};

// Delete all customer_order_item from the database.
exports.deleteAll = (req, res) => {
    customer_order_item.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} customer_order_item were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all customer_order_item."
      });
    });
};

