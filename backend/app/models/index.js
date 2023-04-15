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
globalMastersDB.order_status = require("./order_status.model.js")(globalMasterSequelize, Sequelize);


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


globalMastersDB.vendor.belongsTo(globalMastersDB.cities, {
  as: 'vendor_city', 
  foreignKey: 'city'
});
globalMastersDB.cities.hasOne(globalMastersDB.customer, {
  foreignKey: 'city'
});


globalMastersDB.vendor.hasOne(globalMastersDB.vendor_stock, {
  as: 'vendor_stock', 
  foreignKey: 'vendor_id'
});
globalMastersDB.vendor_stock.belongsTo(globalMastersDB.vendor, {
  as: 'vendor_stock', 
  foreignKey: 'vendor_id'
});

globalMastersDB.vendor.hasOne(globalMastersDB.vendor_payment_history, {
  as: 'vendor_va_payhistory', 
  foreignKey: 'vendor_id'
});
globalMastersDB.vendor_payment_history.belongsTo(globalMastersDB.vendor, {
  as: 'vendor_va_payhistory', 
  foreignKey: 'vendor_id'
});



globalMastersDB.customer.hasOne(globalMastersDB.customer_order, {
  as: 'customer_customer_order', 
  foreignKey: 'customer_id'
});
globalMastersDB.customer_order.belongsTo(globalMastersDB.customer, {
  as: 'customer_customer_order', 
  foreignKey: 'customer_id'
});



globalMastersDB.order_status.hasOne(globalMastersDB.customer_order, {
  as: 'customer_order_status', 
  foreignKey: 'order_status'
});
globalMastersDB.customer_order.belongsTo(globalMastersDB.order_status, {
  as: 'customer_order_status', 
  foreignKey: 'order_status'
});

globalMastersDB.customer.hasOne(globalMastersDB.customer_payment_history, {
  as: 'customer_cust_payhistory', 
  foreignKey: 'customer_id'
});
globalMastersDB.customer_payment_history.belongsTo(globalMastersDB.customer, {
  as: 'customer_cust_payhistory', 
  foreignKey: 'customer_id'
});



module.exports = {
  globalMastersDB,
}
