const { globalMastersDB } = require("../models");
const vendor_stock = globalMastersDB.vendor_stock;
const vendor = globalMastersDB.vendor;
const Op = globalMastersDB.sequelize.op;


// Create and Save a new Stock
exports.create = (req, res) => {
    // Validate request
    if (!req.body.vendor_id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    //create new stock
    const vendor_stockData = {
        vendor_id: req.body.vendor_id,
        description: req.body.description,
        rate: req.body.rate,
        quantity: req.body.quantity,
        amount: req.body.amount,
        stock_date: req.body.stock_date,
    };

    // Save vendorData in the database
    vendor_stock.create(vendor_stockData)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Vendor Data."
            });
        });
};

// Retrieve all vendor from the database.
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
      attributes = ['id', 'vendor_id', 'description', 'rate', 'quantity', 'amount', 'stock_date', 'is_delete' ]
    }
  
    let include = [];
    if(req.body.include) {
      include =  [{
        model: vendor,
        as: 'vendor_stock',
        attributes: ['vendor_name']      
      }];
    }

    vendor_stock.findAll({
        attributes: attributes,
        include: include,
        where: { is_delete: 0}
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                   err.message || "Some error occurred while retrieving Stocks "
            });
        });
};

// Find a single stock with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    vendor_stock.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            }
            else {
                res.status(404).send ({
                    message: `Cannot find stock with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving stock with id=" + id
            });
        });
};

// Update a Stock by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    vendor_stock.update(req.body,{
        where: {id: id}
    })
    .then(num => {
        console.log('updated = ' + num)
        if (num == 1) {
            res.send({
                message: "Stock is updated successfully."
            });
        }
        else {
            res.send({
                message: `Cannot update Stock with id=${id}.Maybe vendor Stock was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Stock with id=" + id
        });
    });
};
// Delete a Stock with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    vendor_stock.update({is_delete: 1}, {
    //vendor_stock.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "vendor stock was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete vendor stock with id=${id}. Maybe customer was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete vendor stock with id=" + id
        });
      });
  };

// Delete all Cities from the database.
exports.deleteAll = (req, res) => {
    vendor_stock.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({
            message: "${nums} Stocks were deleted successfully!"
        });
    })
    .catch(err => {
        res.status(500).send({
            message: 
                err.message || "Some error occurred while removing all Stocks."
        });
    });
};
