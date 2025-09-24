import express from 'express';
const router = express.Router();

const teamMembers = [
  { name: "Matheus Soares Valério", photo: "membro1.jpg" },
  { name: "Sarah Olivatto de Oliveira", photo: "membro2.jpg" },
];

// Rota sem o prefixo "/team"
router.get('/', (req, res) => {  // Alterei de '/team' para '/'
  console.log("✔️ Rota /team acessada"); // TESTE!
  res.render('team/show', { teamMembers });  // Certifique-se de que a pasta "team" seja referenciada
});

export default router;
