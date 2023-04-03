const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");



const globalMasterSequelize = new Sequelize(dbConfig[0].DB, dbConfig[0].USER, dbConfig[0].PASSWORD, {
  host: dbConfig[0].HOST,
  dialect: dbConfig[0].dialect,
  operatorsAliases: false,
  
  pool: {
    max: dbConfig[0].pool.max,
    min: dbConfig[0].pool.min,
    acquire: dbConfig[0].pool.acquire,
    idle: dbConfig[0].pool.idle
  }
});



const globalMastersDB = {};


globalMastersDB.Sequelize = Sequelize;
globalMastersDB.sequelize = globalMasterSequelize;



globalMastersDB.customer = require("./customer.model.js")(globalMasterSequelize, Sequelize);
globalMastersDB.customer_order = require("./customer_order.model.js")(globalMasterSequelize, Sequelize);
globalMastersDB.customer_order_item = require("./customer_order_item.model.js")(globalMasterSequelize, Sequelize);
globalMastersDB.vendor = require("./vendor.model.js")(globalMasterSequelize, Sequelize);
globalMastersDB.vendor_stock = require("./vendor_stock.model.js")(globalMasterSequelize, Sequelize);
globalMastersDB.vendor_payment_history = require("./vendor_payment_history.model.js")(globalMasterSequelize, Sequelize);
globalMastersDB.customer_payment_history = require("./customer_payment_history.model.js")(globalMasterSequelize, Sequelize);

globalMastersDB.cities = require("./cities.model.js")(globalMasterSequelize, Sequelize);
globalMastersDB.states = require("./states.model.js")(globalMasterSequelize, Sequelize);
globalMastersDB.user = require("./user.model.js")(globalMasterSequelize, Sequelize);
globalMastersDB.role = require("./role.model.js")(globalMasterSequelize, Sequelize);
globalMastersDB.refreshToken = require("./refreshToken.model.js")(globalMasterSequelize, Sequelize);

globalMastersDB.role.belongsToMany(globalMastersDB.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
globalMastersDB.user.belongsToMany(globalMastersDB.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

globalMastersDB.refreshToken.belongsTo(globalMastersDB.user, {
  foreignKey: 'userId', targetKey: 'id'
});
globalMastersDB.user.hasOne(globalMastersDB.refreshToken, {
  foreignKey: 'userId', targetKey: 'id'
});

globalMastersDB.ROLES = ["user", "admin", "moderator"];


globalMastersDB.customer.belongsTo(globalMastersDB.cities, {
  as: 'customer_city', 
  foreignKey: 'city'
});
globalMastersDB.cities.hasOne(globalMastersDB.customer, {
  foreignKey: 'city'
});


module.exports = {
  globalMastersDB,
}
