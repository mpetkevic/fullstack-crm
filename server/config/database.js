const Sequelize = require('sequelize');
const environment = require('custom-env');

environment.env();

const database = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres'
});

module.exports = database;
