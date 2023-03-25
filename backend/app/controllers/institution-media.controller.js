const { institutionsDB } = require("../models");
const Institution_media = institutionsDB.institution_media;
const Op = institutionsDB.Sequelize.Op;


// Create and Save a new institution media
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a institution media
  const institution_media = {
    inst_id: req.body.inst_id,
    media_type: req.body.media_type,
    media_path: req.body.media_path,
    is_active: req.body.is_active ? req.body.is_active : 0,

  };

  // Save institution media in the database
  Institution_media.create(institution_media)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the institution media."
      });
    });
};

// Retrieve all institution medias from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Institution_media.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving institution medias."
      });
    });
};

// Find a single institution media with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Institution_media.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find institution media with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving institution media with id=" + id
      });
    });
};

// Update a institution media by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Institution_media.update(req.body.institutionmedia, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "institution media was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update institution media with id=${id}. Maybe institution media was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating institution media with id=" + id
      });
    });
};

// Delete a City with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Institution_media.destroy({
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
  Institution_media.destroy({
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
  Institution_media.findAll({ where: { is_active: true } })
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
