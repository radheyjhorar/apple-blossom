module.exports = (sequelize, Sequelize) => {
    const order_status = sequelize.define("order_status", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      order_status: {
        type: Sequelize.STRING
      },
    });
  
    return order_status;
  };