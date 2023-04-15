const { globalMastersDB } = require("../models");
const vendor = globalMastersDB.vendor;
const vendor_payment_history = globalMastersDB.vendor_payment_history;
const Op = globalMastersDB.Sequelize.Op;


// Create and Save a new Vendor
exports.create = (req, res) => {
  // Validate request
  if (!req.body.vendor_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Vendor_payment_historyData
  const vendor_payment_historyData = {
    vendor_id: req.body.vendor_id,
    payment_date: req.body.payment_date,
    deposit_amount: req.body.deposit_amount,
    resipte_no: req.body.resipte_no,
  };

  // Save vendor_payment_historyData in the database
  vendor_payment_history.create(vendor_payment_historyData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the History."
      });
    });
};

// Retrieve all vendor_payment_history from the database.
exports.findAll = (req, res) => {
  let where = {};
  if (req.body.is_delete != null) {
    where.is_delete = req.body.is_delete
  }
  // if (req.body.state_id != null) {
  //   where.state_id = req.body.state_id
  // }
  let attributes = req.body.attributes; 
  if(attributes == null) {
    attributes = ['id', 'vendor_id', 'payment_date', 'deposit_amount', 'resipte_no', 'createdAt', 'updatedAt', 'is_delete' ]
  }

  let include = [];
  if(req.body.include) {
    include =  [{
      model: vendor,
      as: 'vendor_va_payhistory',
      attributes: ['vendor_name']      
    }];
  }

  vendor_payment_history.findAll({
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
          err.message || "Some error occurred while retrieving History."
      });
    });
};

// Find a single vendor_payment_history with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  vendor_payment_history.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Payment History with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Payment History with id=" + id
      });
    });
};

// Update a vendor Payment History by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  vendor_payment_history.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      console.log('updated = ' + num)
      if (num == 1) {
        res.send({
          message: "vendor Payment History was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update vendor payment history with id=${id}. Maybe vendor payment history was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating vendor payment history with id=" + id
      });
    });
};

// Delete a vendor payment history with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  vendor_payment_history.update({is_delete: 1}, {
  //vendor_payment_history.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "vendor payment history was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete vendor payment history with id=${id}. Maybe vendor payment history was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete vendor payment history with id=" + id
      });
    });
};