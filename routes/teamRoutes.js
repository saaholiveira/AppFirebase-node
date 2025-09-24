// routes/teamRoutes.js
import express from 'express';
const router = express.Router();

const teamMembers = [
  { name: "Matheus Soares Valério", photo: "Matheus.jpg" },
  { name: "Sarah Olivatto de Oliveira", photo: "Sarah.jpg" },
];

// Defina a rota como '/team'
router.get('/', (req, res) => {
  console.log("✔️ Rota /team acessada");
  res.render('show', { teamMembers });
});

export default router;
