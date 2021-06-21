const Sequelize = require("sequelize");
const db = require("../config/database.js");
const Billing = db.define("billing", {
    billingId: {
    type:Sequelize.INTEGER(),
    autoIncrement:true,
    allowNull: false,    
    primaryKey: true,
    },
    packageType: {
    type: Sequelize.STRING(45),
    allowNull: false,    
    },
    packageRate:{
    type: Sequelize.INTEGER(20),
    allowNull: false,    
    },
    paymentType:{
    type: Sequelize.STRING(45),
    allowNull: false,
    },
});
    module.exports = Billing;