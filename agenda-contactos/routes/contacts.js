// filepath: agenda-contactos/routes/contacts.js
const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// Get all contacts
router.get('/', async (req, res) => {
  const contacts = await Contact.findAll();
  res.json(contacts);
});

// Create a contact
router.post('/', async (req, res) => {
  const { name, phone, email, userId } = req.body;
  try {
    const contact = await Contact.create({ name, phone, email, userId });
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a contact
router.put('/:id', async (req, res) => {
  try {
    const contact = await Contact.update(req.body, { where: { id: req.params.id } });
    res.json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a contact
router.delete('/:id', async (req, res) => {
  try {
    await Contact.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Contact deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;