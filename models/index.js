var Sequelize = require("sequelize");
var sequelize = require("../dbConnection").sequelize;
module.exports={
    User:require('./user')(Sequelize, sequelize, Sequelize.DataTypes),
}