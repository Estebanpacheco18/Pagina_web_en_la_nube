// filepath: agenda-contactos/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./models/index'); // Conexión a SQLite
const User = require('./models/user');
const Contact = require('./models/Contact');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import routes
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contacts');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);

// Sync database
sequelize
  .sync({ force: false }) // Cambia a `true` si quieres reiniciar la base de datos
  .then(() => console.log('Database synced'))
  .catch((err) => console.error('Error syncing database:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));