// filepath: agenda-contactos/models/Contact.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const User = require('./user');

const Contact = sequelize.define('Contact', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
  },
});

// Relación: Un usuario tiene muchos contactos
User.hasMany(Contact, { foreignKey: 'userId' });
Contact.belongsTo(User, { foreignKey: 'userId' });

module.exports = Contact;