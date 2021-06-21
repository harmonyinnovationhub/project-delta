const Sequelize = require("sequelize");
const db = require("../config/database.js");
const Delivery = db.define("delivery", {
    deliveryId: {
    type:Sequelize.INTEGER(),
    autoIncrement:true,
    allowNull: false,    
    primaryKey: true,
    },
    trackingNumber: {
    type: Sequelize.STRING(45),
    allowNull: false,    
    },
    firstName: {
    type: Sequelize.STRING(20),
    allowNull: false,    
    },
    lastName:{
    type: Sequelize.STRING(20),
    allowNull: false,    
    },
    deliveryAddress:{
    type: Sequelize.STRING(45),
    allowNull: false,    
    },
    orderDate:{
    type: Sequelize.DATE,
    allowNull: false,    
    },
    deliveryDate:{
    type: Sequelize.DATE,
    allowNull: false,    
    },
});
    module.exports = Delivery;