const Sequelize = require("sequelize");
const db = require("../config/database.js");
const Customer = db.define("customer", {
customerId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
},
firstName: {
    type: Sequelize.STRING(20),
    allowNull: false,
},
lastName: {
    type: Sequelize.STRING(20),
    allowNull: false,
},
emailAddress: {
    type: Sequelize.STRING(45),
    allowNull: false,
    unique: true,
},
password: {
    type: Sequelize.STRING(12),
    allowNull: false,
    unique: true,
},
phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
},
residentialAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
},
    
});


module.exports = Customer;