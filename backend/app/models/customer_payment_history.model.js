module.exports = (sequelize, Sequelize) => {
    const customer_payment_history = sequelize.define("customer_payment_history", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      customer_id: {
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
  
    return customer_payment_history;
  };