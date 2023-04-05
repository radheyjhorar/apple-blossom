const { globalMastersDB } = require("../models");
const vendor = globalMastersDB.vendor;
const Op = globalMastersDB.Sequelize.Op;


// Create and Save a new Vendor
exports.create = (req, res) => {
  // Validate request
  if (!req.body.vendor_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a VendorData
  const vendorData = {
    vendor_name: req.body.vendor_name,
    vendor_address: req.body.vendor_address,
    city: req.body.city,
    // state: req.body.state,
    mobile1: req.body.mobile1,
    mobile2: req.body.mobile2,
  };

  // Save vendorData in the database
  vendor.create(vendorData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the New vendor."
      });
    });
};

// Retrieve all vendor from the database.
exports.findAll = (req, res) => {
  vendor.findAll({
    where: { is_delete: 0}
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving vendor."
      });
    });
};

// Find a single City with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  vendor.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Vendor with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Vendor with id=" + id
      });
    });
};

// Update a vendor by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  vendor.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      console.log('updated = ' + num)
      if (num == 1) {
        res.send({
          message: "vendor was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update vendor with id=${id}. Maybe vendor was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating vendor with id=" + id
      });
    });
};

// Delete a Vendor with the specified id in the request
// Delete a customer with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  vendor.update({is_delete: 1}, {
  //vendor.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "vendor was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete vendor with id=${id}. Maybe vendor was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete vendor with id=" + id
      });
    });
};

// Delete all Vendors from the database.
exports.deleteAll = (req, res) => {
  vendor.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Vendors were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Vendors."
      });
    });
};

