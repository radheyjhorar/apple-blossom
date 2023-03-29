module.exports = (sequelize, Sequelize) => {
    const states = sequelize.define("states", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      state_name: {
        type: Sequelize.STRING
      },
      
    });
  
    return states;
  };