const { institutionsDB } = require("../models");
const inst_language = institutionsDB.inst_language;
const Op = institutionsDB.Sequelize.Op;
const Sequelize = require("sequelize");


// Create and Save a new inst_language
exports.create = (req, res) => {
  console.log(req.body.institution_langs);
  isSave = true;
  inst_id = req.body.inst_id;
  if (!inst_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  

  inst_language.destroy({
    where: { inst_id: inst_id }
  }).then(d => {
    req.body.institution_langs.forEach(inst_lang => {
      console.log(inst_lang);
      

    // Save inst_language in the database
    inst_language.create(inst_lang)
      .then(data => {
      
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the inst_language."
        });
      });
    });
    if(isSave) {
      res.status(200).send({
        message:
          "languages saved succesfully"
      });
    } 
  });
};

// Retrieve all Cities from the database.
exports.findAll = async (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  inst_language.findAll()
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

// Find a single inst_language with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log('paan' + id);
  inst_language.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find inst_language with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving inst_language with id=" + id
      });
    });
};

// Update a inst_language by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  inst_language.update(req.body.inst_language, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "inst_language was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update inst_language with id=${id}. Maybe inst_language was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating inst_language with id=" + id
      });
    });
};

// Delete a inst_language with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  inst_language.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "inst_language was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete inst_language with id=${id}. Maybe inst_language was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete inst_language with id=" + id
      });
    });
};

// Delete all Cities from the database.
exports.deleteAll = (req, res) => {
  inst_language.destroy({
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

// find all published inst_language
exports.findAllPublished = (req, res) => {
 inst_language.findAll({ where: { is_active: true } })
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
