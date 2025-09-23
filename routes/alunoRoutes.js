import { Router } from "express";
import alunoController from "../controllers/alunoController.js";

const router = Router();

// /alunos/
router.get("/", alunoController.list);

// /alunos/create
router.get("/create", alunoController.createForm);
router.post("/create", alunoController.create);

// /alunos/:id/edit
router.get("/:id/edit", alunoController.editForm);
router.post("/:id/edit", alunoController.update);

// /alunos/:id/delete
router.get("/:id/delete", alunoController.delete);

export default router;
