const { institutionsDB } = require("../models");
const job = institutionsDB.job;
const Institution_contact = institutionsDB.institution_contact;
const Op = institutionsDB.Sequelize.Op;


// Create and Save a new job
exports.create = (req, res) => {
  // Validate request
  if (!req.body.post) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a job
  const bo = {
    post: req.body.post,
    exp: req.body.exp,
    age_limit: req.body.age_limit,
    salary: req.body.salary,
    inst_id: req.body.inst_id,
    sdate: req.body.sdate,
    edate: req.body.edate,
    is_active: req.body.is_active ? req.body.is_active : 0,

  };

  // Save job in the database
  job.create(bo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the job."
      });
    });
};

// Retrieve all jobs from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  job.findAll({
    include: [{
      model: Institution_contact,
      attributes: ['name']
      
    }]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving jobs."
      });
    });
};

// Find a single job with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  job.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find job with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving job with id=" + id
      });
    });
};

// Update a job by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  job.update(req.body.job, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "job was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update job with id=${id}. Maybe job was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating job with id=" + id
      });
    });
};

// Delete a job with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  job.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "job was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete job with id=${id}. Maybe job was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete job with id=" + id
      });
    });
};

// Delete all jobs from the database.
exports.deleteAll = (req, res) => {
 job.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} jobs were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all citirs."
      });
    });
};

// find all published job
exports.findAllPublished = (req, res) => {
 job.findAll({ where: { is_active: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving jobs."
      });
    });
};
