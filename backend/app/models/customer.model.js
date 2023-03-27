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
      state: {
        type: Sequelize.INTEGER
      },
      mobile1: {
        type: Sequelize.STRING
      },
      mobile2: {
        type: Sequelize.STRING
      },
      ledger_no: {
        type: Sequelize.STRING
      },
     
    });
  
    return board;
  };
  