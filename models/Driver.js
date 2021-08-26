const Sequelize = require("sequelize");
const db = require("../config/database.js");
const Driver = db.define("driver", {
    driverId: {
    type:Sequelize.INTEGER(),
    autoIncrement:true,
    allowNull: false,    
    primaryKey: true,
    },
    firstName: {
    type: Sequelize.STRING,
    allowNull: false,    
    },
    lastName:{
    type: Sequelize.STRING,
    allowNull: false,    
    },
    residentialAddress:{
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    },
    date_oF_birth:{
    type: Sequelize.DATE,
    allowNull: false,
    },
    emailAddress:{
    type: Sequelize.DATE,
    allowNull: false,
    unique: true,
    },
    phoneNumber:{
    type: Sequelize.STRING,
    allowNull: false,    
    },
    username:{
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    },
    password:{
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    },
    currentLocation:{
    type: Sequelize.GEOMETRY,
    allowNull: false,
    },
});
    module.exports = Driver;