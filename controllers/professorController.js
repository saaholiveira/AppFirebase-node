// controllers/professorController.js
const Professor = require('../models/professorModel');

// Função para criar um novo professor
const criarProfessor = async (req, res) => {
  try {
    const { nome, email } = req.body;

    // Verificar se os dados são válidos
    if (!nome || !email) {
      return res.status(400).json({ message: 'Nome e email são obrigatórios.' });
    }

    // Criar o novo professor
    const novoProfessor = new Professor({
      nome,
      email,
    });

    // Salvar no banco de dados
    await novoProfessor.save();

    // Resposta de sucesso
    res.status(201).json({
      message: 'Professor criado com sucesso!',
      professor: novoProfessor,
    });
  } catch (err) {
    console.error('Erro ao criar professor:', err);
    res.status(500).json({ message: 'Erro no servidor ao criar professor.' });
  }
};

// Função para listar todos os professores
const listarProfessores = async (req, res) => {
  try {
    const professores = await Professor.find(); // Busca todos os professores no banco de dados
    res.status(200).json(professores); // Retorna os professores em formato JSON
  } catch (err) {
    console.error('Erro ao listar professores:', err);
    res.status(500).json({ message: 'Erro no servidor ao listar professores.' });
  }
};

module.exports = {
  criarProfessor,
  listarProfessores,
};
