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
      price: {
        type: Sequelize.DECIMAL
      },
      stock_date: {
        type: Sequelize.DATE
      },
     
    });
  
    return board;
  };