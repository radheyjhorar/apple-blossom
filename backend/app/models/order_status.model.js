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
    
    }, {
      sequelize,
      tableName: 'order_status',
      timestamps: false
    }
    
    );  
    return order_status;
  };
  
   