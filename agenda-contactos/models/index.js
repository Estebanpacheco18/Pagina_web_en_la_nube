// filepath: agenda-contactos/models/index.js
const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database.sqlite'), // Archivo de la base de datos
});

module.exports = sequelize;