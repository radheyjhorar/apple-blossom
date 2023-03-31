module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    mobile: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
   
    is_active: {
      type: Sequelize.INTEGER
    },
   
    createdAt: {
      field: 'created_at',
      type: Sequelize.DATE,
    },
    updatedAt: {
      field: 'modified_at',
      type: Sequelize.DATE,
    },
    
  });

  return user;
};
