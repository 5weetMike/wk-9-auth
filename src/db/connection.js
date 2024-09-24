const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(process.env.MYSQL_URI);

sequelize.authenticate();

console.log("DB is working my guy!");

module.exports = sequelize;