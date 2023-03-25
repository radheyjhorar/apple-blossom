const { institutionsDB } = require("../models");
const Institution_profile = institutionsDB.institution_profile;
const Institution_medium = institutionsDB.institution_medium;
const Institution_contact = institutionsDB.institution_contact;
const Institution_board = institutionsDB.institution_board;
const Institution_admission = institutionsDB.institution_admission;
const Jobs = institutionsDB.job;
const Op = institutionsDB.Sequelize.Op;
const Sequelize = institutionsDB.Sequelize;


// Create and Save a new City
exports.create = (req, res) => {
  // Validate request
  if (!req.body.inst_id) {
    res.status(400).send({
      message: "institute id missing!"
    });
    return;
  }

  // Create a City
  const institution_profile = {
    inst_id: req.body.inst_id,
    salutation_id: req.body.salutation_id,
    type_id: req.body.type_id,
    subtype_id: req.body.subtype_id,
    est_year: req.body.est_year,
    approx_fees: req.body.approx_fees,
    logo: req.body.logo,
    mobile1: req.body.mobile1,
    mobile2: req.body.mobile2,
    email1: req.body.email1,
    email2: req.body.email2,
    address1: req.body.address1,
    address2: req.body.address2,
    address3: req.body.address3,
    desc: req.body.desc,
    fname: req.body.fname,
    lname: req.body.lname,
    designation: req.body.designation,
    in_spotlight: req.body.in_spotlight,
    noofstudents: req.body.noofstudents,
    noofteachers: req.body.noofteachers,
    top_school: req.body.top_school,
    featured_school: req.body.featured_school,
    is_active: req.body.is_active ? req.body.is_active : 0,

  };

  // Save City in the database
  Institution_profile.create(institution_profile)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the City."
      });
    });
};

// Retrieve all Cities from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  const todayDate = Date();
  Institution_profile.findAll({
    include:  [{
       model: Institution_contact,
       attributes: ['name'],       
      //  include: [
      //   {
      //     model: Jobs,
      //     required: false,
      //     as: 'job',
      //     attributes: [[Sequelize.fn('COUNT', Sequelize.col(`institution-contact.job.id`)), "TotalJobs"]],
          
      //  },
      //  {
      //   model: Institution_admission,
      //   required: false,
      //   as: 'institution_admission',
      //   attributes: [[Sequelize.fn('COUNT', Sequelize.col(`institution-contact.institution_admission.id`)), "TotalAdmission"]],
      //   where: {
      //     start_date: { [Op.lte]: todayDate },
      //     end_date: { [Op.gte]:  todayDate }
      //   }
      //  }
      // ]
    }]
    
  })
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
exports.findOne =  (req, res) => {
  const id = req.params.id;
  
  Institution_profile.findByPk(id,{
    include: [{
      model: Institution_contact,
      attributes: ['id']
   },
   {
    model: Institution_medium,
    attributes: ['medium_id']
 },
 
{
  model: Institution_board,
  attributes: ['board_id']
}
  
  ]
  })
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
      console.log(err);
      res.status(500).send({
        message: "Error retrieving City with id=" + id
      });
    });
};

// Update a City by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Institution_profile.update(req.body.institutionprofile, {
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

  Institution_profile.destroy({
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
  Institution_profile.destroy({
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
  Institution_profile.findAll({ where: { is_active: true } })
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

getProfileMediums = async (inst_id) => {
  return await Institution_medium.findAll({where: { inst_id: inst_id}}).
  then( data => data);
     
}
