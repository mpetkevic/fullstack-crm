const Sequelize = require('sequelize');

const database = require('./../config/database');

const Product = database.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  picture: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.briscoweb.com/wp-content/uploads/2018/07/briscoweb-mobile-design-mock-website.png'
  },
  price: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false
  }
});

module.exports = Product;
