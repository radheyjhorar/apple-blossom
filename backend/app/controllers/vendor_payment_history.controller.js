const { globalMastersDB } = require("../models");
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
  vendor_payment_history.findAll()
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