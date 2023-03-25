const { institutionsDB } = require("../models");
const Institution_medium = institutionsDB.institution_medium;

const Op = institutionsDB.Sequelize.Op;


// Create and Save a new City
exports.create = (req, res) => {
  console.log('medium')
  console.log(req.body.mediumlist);
  isSave = true;
  inst_id = req.body.inst_id;
  if (!inst_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  Institution_medium.destroy({
    where: { inst_id: inst_id }
  }).then(d => {

    req.body.mediumlist.forEach(medium => {
    
    // Validate request
    if (!medium.inst_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    console.log('medium save');
    console.log(medium);
    // Save City in the database
    Institution_medium.create(medium)
      .then(data => {
        
      })
      .catch(err => {
        isSave = false;
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the City."
        });
        return;
      });
    });
    if(isSave) {
      res.status(200).send({
        message:
          "medium saved succesfully"
      });
    } 
  });
}; 

// Retrieve all Cities from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Institution_medium.findAll()
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

  Institution_medium.findByPk(id)
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

  Institution_medium.update(req.body.institutionmedium, {
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

  Institution_medium.destroy({
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
  Institution_medium.destroy({
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
  Institution_medium.findAll({ where: { is_active: true } })
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

