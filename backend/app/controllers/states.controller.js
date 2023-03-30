const { globalMastersDB } = require("../models");
const states = globalMastersDB.states;
const Op = globalMastersDB.Sequelize.Op;


// Create and Save a new states
exports.create = (req, res) => {
  // Validate request
  if (!req.body.state_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a statesData
  const statesData = {
    state_name: req.body.state_name,
  };

  // Save statesData in the database
  states.create(statesData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the state."
      });
    });
};

// Retrieve all states from the database.
exports.findAll = (req, res) => {
  states.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving state."
      });
    });
};

// Find a single state with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  states.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find state with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving state with id=" + id
      });
    });
};

// Update a state by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  states.update(req.body.states, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "state was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update state with id=${id}. Maybe state was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating state with id=" + id
      });
    });
};

// Delete a state with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  states.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "state was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete state with id=${id}. Maybe state was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete state with id=" + id
      });
    });
};

// Delete all states from the database.
exports.deleteAll = (req, res) => {
  states.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} states were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all states."
      });
    });
};

