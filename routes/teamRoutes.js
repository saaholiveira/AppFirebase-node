// routes/teamRoutes.js
import express from 'express';
const router = express.Router();

const teamMembers = [
  { name: "Matheus Soares Valério", photo: "membro1.jpg" },
  { name: "Sarah Olivatto de Oliveira", photo: "membro2.jpg" },
];

router.get('/team', (req, res) => {
  console.log("✔️ Rota /team acessada"); // TESTE!
  res.render('show', { teamMembers });
});

export default router;
