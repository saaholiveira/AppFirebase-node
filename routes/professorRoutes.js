const express = require('express');
const router = express.Router();
const Professor = require('../models/professorModel');

router.post('/', async (req, res) => {
  try {
    const novoProfessor = new Professor(req.body);
    await novoProfessor.save();
    res.status(201).json(novoProfessor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const professores = await Professor.find();
    res.json(professores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
