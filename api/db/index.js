const Sequelize = require('sequelize');
const {dbName,passwordPostgres,userPostgres }= require('../config/config')
const db = new Sequelize(dbName, null, null, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

module.exports = db;