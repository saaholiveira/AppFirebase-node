import { db } from "../config/firebase.js";
import { ref, get, push, set, child, update, remove } from "firebase/database";

const rootRef = ref(db, "professor");

export default {
  async list(req, res) {
    console.log("🚀 Entrou no professorController.list");
    try {
      const snap = await get(rootRef);
      const professor = snap.exists() ? snap.val() : {};
      res.render("professor/list", { title: "Professor", professor });
    } catch (e) {
      console.error("Erro list professor:", e);
      res.status(500).send("Erro ao listar professor");
    }
  },  

  createForm(req, res) {
    res.render("professor/create", { title: "Novo professor" });
  },

  async create(req, res) {
    try {
      const { nome, email } = req.body;
      const novo = push(rootRef);
      await set(novo, { nome, email });
      res.redirect("/professor");
    } catch (e) {
      console.error("Erro create professor:", e);
      res.status(500).send("Erro ao criar professor");
    }
  },

  async editForm(req, res) {
    try {
      const { id } = req.params;
      const snap = await get(child(rootRef, id));
      if (!snap.exists()) return res.status(404).send("professor não encontrado");
      res.render("professor/edit", { title: "Editar professor", id, professor: snap.val() });
    } catch (e) {
      console.error("Erro editForm professor:", e);
      res.status(500).send("Erro ao abrir edição");
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, email } = req.body;
      await update(child(rootRef, id), { nome, email });
      res.redirect("/professor");
    } catch (e) {
      console.error("Erro update professor:", e);
      res.status(500).send("Erro ao atualizar professor");
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await remove(child(rootRef, id));
      res.redirect("/professor");
    } catch (e) {
      console.error("Erro delete professor:", e);
      res.status(500).send("Erro ao excluir professor");
    }
  }
};