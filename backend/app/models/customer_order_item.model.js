module.exports = (sequelize, Sequelize) => {
    const customer_order_item = sequelize.define("customer_order_item", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      order_id: {
        type: Sequelize.INTEGER
      },
      item_name: {
        type: Sequelize.STRING
      },
      item_rate: {
        type: Sequelize.DECIMAL
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.DECIMAL
      },
      item_status: {
        type: Sequelize.INTEGER
      },
     
    });
  
    return customer_order_item;
  };
  