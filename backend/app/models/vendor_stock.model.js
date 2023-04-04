module.exports = (sequelize, Sequelize) => {
    const vendor_stock = sequelize.define("vendor_stock", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      vendor_id: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      rate: {
        type: Sequelize.DECIMAL
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.DECIMAL
      },
      stock_date: {
        type: Sequelize.DATE
      },
      is_delete: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      }
     
    });
  
    return vendor_stock;
  };