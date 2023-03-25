const { institutionsDB } = require("../models");
const Instit_facilities = institutionsDB.instit_facilities;
const Op = institutionsDB.Sequelize.Op;


// Create and Save a new City
exports.create = (req, res) => {
  console.log(req.body.institution_facilitylist);
  isSave = true;
  inst_id = req.body.inst_id;
  if (!inst_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  

  Instit_facilities.destroy({
    where: { inst_id: inst_id }
  }).then(d => {
  req.body.institution_facilitylist.forEach(institution_facility => {
    console.log(institution_facility);
    
    // Validate request
    if (!institution_facility.inst_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }


    // Save City in the database
    Instit_facilities.create(institution_facility)
      .then(data => {
      
      })
      .catch(err => {
        isSave=false;
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the insitution facility."
        });
        return;
      });
    });
    if(isSave) {
      res.status(200).send({
        message:
          "institution facilities saved succesfully2"
      });
    }
});
  
};

// Retrieve all insitution facilities from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Institution_facility.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving insitution facilities."
      });
    });
};

// Find a single City with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Institution_facility.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find institution facility with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving institution facility with id=" + id
      });
    });
};

// Update a institution facility by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Institution_facility.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "institution facility was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update institution facility with id=${id}. Maybe institution facility was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating institution facility with id=" + id
      });
    });
};

// Delete a institution facility with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Institution_facility.destroy({
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

// Delete all institution facilities from the database.
exports.deleteAll = (req, res) => {
  Institution_facility.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} institution facility were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all institution facilities."
      });
    });
};

// find all published City
exports.findAllPublished = (req, res) => {
  Institution_facility.findAll({ where: { is_active: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving institution facilities."
      });
    });
};
