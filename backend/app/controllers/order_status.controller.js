const { globalMastersDB } = require("../models");
const order_status = globalMastersDB.order_status;
const Op = globalMastersDB.Sequelize.Op;


// Create and Save a new order_status
exports.create = (req, res) => {
  // Validate request
  if (!req.body.order_status) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a order status Data
  const order_status = {
    order_status: req.body.order_status,
    order_status: req.body.order_status,
  };

  // Save order status Data in the database
  order_status.create(order_statusData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the city."
      });
    });
};

// Retrieve all order status from the database.
exports.findAll = (req, res) => {
  cities.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving order status."
      });
    });
};

// Find a single order status with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  order_status.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find order_status with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving order_status with id=" + id
      });
    });
};

// Update a order_status by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  order_status.update(req.body.order_status, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "order_status was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update order_status with id=${id}. Maybe order_status was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating order_status with id=" + id
      });
    });
};

// Delete a order_status with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  order_status.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "order_status was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete order_status with id=${id}. Maybe order_status was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete order_status with id=" + id
      });
    });
};

// Delete all order_status from the database.
exports.deleteAll = (req, res) => {
  order_status.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} order_status were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all order_status."
      });
    });
};

