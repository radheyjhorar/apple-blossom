const { globalMastersDB } = require("../models");
const customer_order = globalMastersDB.customer_order;
const customer = globalMastersDB.customer;
const order_status = globalMastersDB.order_status;
const customer_order_item = globalMastersDB.customer_order_item;
const Op = globalMastersDB.Sequelize.Op;


// Create and Save a new customer_order
exports.create = (req, res) => {
  // Validate request
  
  const [cust_order, order_items ] = req.body;
  // Create a customer_orderData 
  if(cust_order.total_amount <= 0) {
    order_items.forEach(item => {
      cust_order.total_amount += item.amount;
    });
  }

  const customer_orderData = {
    customer_id: cust_order.customer_id,
    order_description: cust_order.order_description,
    total_amount: cust_order.total_amount,
    order_status: cust_order.order_status,
  };

  // Save customer_orderData in the database
  customer_order.create(customer_orderData)
    .then(data => {
      const order_id = data.id;
      customer_order_item.destroy({
        where: {
          order_id: {
            [Op.eq]: order_id
          }
        }
      }).then(() => {
        order_items.forEach(item => {
           item.order_id = order_id
           customer_order_item.create(item);
        });
      })
      
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the customer_order."
      });
    });
};

// Retrieve all customer_order from the database.
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
    attributes = ['id', 'customer_id', 'order_description', 'total_amount', 'order_status', 'createdAt', 'updatedAt', 'is_delete']
  }

  let include = [];
  if(req.body.include) {
    include =  [{
      model: customer,
      as: 'customer_customer_order',
      attributes: ['name']      
    },
    {
      model: order_status,
      as: 'customer_order_status',
      attributes: ['order_status']      
    }
  ];
  }
    customer_order.findAll({
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
          err.message || "Some error occurred while retrieving customer_order."
      });
    });
};

// Find a single customer_order with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  customer_order.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find customer_order with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving customer_order with id=" + id
      });
    });
};

// Update a customer_order by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  customer_order.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "customer_order was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update customer_order with id=${id}. Maybe customer_order was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating customer_order with id=" + id
      });
    });
};

// Delete a customer order with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  customer_order.update({is_delete: 1}, {
  //customer_order.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "customer order was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete customer order with id=${id}. Maybe customer order was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete customer order with id=" + id
      });
    });
};

// Delete all customer_orders from the database.
exports.deleteAll = (req, res) => {
    customer_order.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} customer_order were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all customer_order."
      });
    });
};

