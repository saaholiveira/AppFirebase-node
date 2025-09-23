import { db } from "../config/firebase.js";
import { ref, get, push, set, child, update, remove } from "firebase/database";

const rootRef = ref(db, "alunos");

export default {
  async list(req, res) {
    try {
      const snap = await get(rootRef);
      const alunos = snap.exists() ? snap.val() : {};
      res.render("alunos/list", { title: "Alunos", alunos });
    } catch (e) {
      console.error("Erro list alunos:", e);
      res.status(500).send("Erro ao listar alunos");
    }
  },

  createForm(req, res) {
    res.render("alunos/create", { title: "Novo Aluno" });
  },

  async create(req, res) {
    try {
      const { nome, email } = req.body;
      const novo = push(rootRef);
      await set(novo, { nome, email });
      res.redirect("/alunos");
    } catch (e) {
      console.error("Erro create aluno:", e);
      res.status(500).send("Erro ao criar aluno");
    }
  },

  async editForm(req, res) {
    try {
      const { id } = req.params;
      const snap = await get(child(rootRef, id));
      if (!snap.exists()) return res.status(404).send("Aluno não encontrado");
      res.render("alunos/edit", { title: "Editar Aluno", id, aluno: snap.val() });
    } catch (e) {
      console.error("Erro editForm aluno:", e);
      res.status(500).send("Erro ao abrir edição");
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, email } = req.body;
      await update(child(rootRef, id), { nome, email });
      res.redirect("/alunos");
    } catch (e) {
      console.error("Erro update aluno:", e);
      res.status(500).send("Erro ao atualizar aluno");
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await remove(child(rootRef, id));
      res.redirect("/alunos");
    } catch (e) {
      console.error("Erro delete aluno:", e);
      res.status(500).send("Erro ao excluir aluno");
    }
  }
};

const express = require("express");
const router = express.Router();
 
// Exemplo de dados (simulação)
const alunos = [
  { id: 1, nome: "Matheus", email: "matheus@email.com" },
  { id: 2, nome: "Ana", email: "ana@email.com" }
];
 
// Rota para exibir um aluno específico
router.get("/:id", (req, res) => {
  const aluno = alunos.find(a => a.id == req.params.id);
  if (!aluno) {
    return res.status(404).send("Aluno não encontrado");
  }
  res.render("alunos/show", { aluno });
});
 
module.exports = router;