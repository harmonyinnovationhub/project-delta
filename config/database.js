const Sequelize = require("sequelize");



module.exports = new Sequelize("whirlwind_logistics", "root", "*I]OijO9R4a[vayk", {
  host: "localhost",
  dialect: "mysql",
  define: {
    freezeTableName: true,
    underscored: true
  }
});


