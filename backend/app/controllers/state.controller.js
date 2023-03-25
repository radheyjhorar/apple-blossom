const { globalMastersDB } = require("../models");
const State = globalMastersDB.state;
const Country = globalMastersDB.country;
const Op = globalMastersDB.Sequelize.Op;

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
  const state = {
    name: req.body.name,
    country_id: req.body.country_id,
    is_active: req.body.is_active ? req.body.is_active : 0,

  };

  // Save Salutation in the database
  State.create(state)
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
  let where = {};
  console.log("country id =");
  let country_id = parseInt(req.body.country_Id);

  if(req.body.is_active != null) {
      where.is_active = req.body.is_active
  }
  if(country_id > 0) {
    where.country_id = country_id
  }
  let attributes = req.body.attributes; 
  if(attributes == null) {
    attributes = ['id', 'name', 'country_id', 'is_active', 'created_at', 'modified_at']
  }
 
  let include = [];
  if(req.body.include) {
    include =[{
      model: Country,
      attributes: ['name']      
    }];
  }
  
  State.findAll({
    attributes: attributes,
    include: include,
    where: where
  })
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

  State.findByPk(id)
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

  State.update(req.body.state, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "State was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update State with id=${id}. Maybe State was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating State with id=" + id
      });
    });
};

// Delete a State with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  State.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "State was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete State with id=${id}. Maybe State was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete State with id=" + id
      });
    });
};

// Delete all Salutations from the database.
exports.deleteAll = (req, res) => {
  State.destroy({
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
  State.findAll({ 
    attributes: ['id', 'name'],
    where: { is_active: true } })
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
