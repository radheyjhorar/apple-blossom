module.exports = (sequelize, Sequelize) => {
  const vendor = sequelize.define("vendor", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    vendor_name: {
      type: Sequelize.STRING
    },
    vendor_address: {
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
   
  });

  return vendor;
};
