module.exports = (sequelize, Sequelize) => {
    const customer_order = sequelize.define("customer_order", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      customer_id: {
        type: Sequelize.INTEGER
      },
      order_description: {
        type: Sequelize.STRING
      },
      total_amount: {
        type: Sequelize.DECIMAL
      },
      order_status: {
        type: Sequelize.STRING
      },
      is_delete: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      }

    });
  
    return customer_order;
  };
  