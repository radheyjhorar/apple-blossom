module.exports = (sequelize, Sequelize) => {
    const cities = sequelize.define("cities", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      city_name: {
        type: Sequelize.STRING
      },
      state_id: {
        type: Sequelize.STRING
      },
     
    });
  
    return cities;
  };