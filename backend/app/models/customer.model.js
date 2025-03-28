module.exports = (sequelize, Sequelize) => {
    const customer = sequelize.define("customer", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.INTEGER
      },
      // state: {
      //   type: Sequelize.INTEGER,
      //   defaultValue: 0
      // },
      mobile1: {
        type: Sequelize.STRING
      },
      mobile2: {
        type: Sequelize.STRING
      },
      ledger_no: {
        type: Sequelize.STRING
      },
      is_delete: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      }
     
    });
  
    return customer;
  };
  