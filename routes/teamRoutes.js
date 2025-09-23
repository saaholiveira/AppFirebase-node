// routes/teamRoutes.js
import express from 'express';
const router = express.Router();

const teamMembers = [
  { name: "João Silva", photo: "membro1.jpg" },
  { name: "Maria Oliveira", photo: "membro2.jpg" },
  { name: "Carlos Souza", photo: "membro3.jpg" },
];

router.get('/team', (req, res) => {
  console.log("✔️ Rota /team acessada"); // TESTE!
  res.render('show', { teamMembers });
});

export default router;
