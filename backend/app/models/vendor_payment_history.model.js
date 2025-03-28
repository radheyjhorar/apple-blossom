module.exports = (sequelize, Sequelize) => {
    const vendor_payment_history = sequelize.define("vendor_payment_histories", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      vendor_id: {
        type: Sequelize.INTEGER
      },
      payment_date: {
        type: Sequelize.DATE
      },
      deposit_amount: {
        type: Sequelize.INTEGER
      },
      resipte_no: {
        type: Sequelize.INTEGER
      },
      is_delete: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      }
      
    });
  
    return vendor_payment_history;
  };
  