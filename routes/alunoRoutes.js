import { Router } from "express";
import alunoController from "../controllers/alunoController.js";

const router = Router();

router.get("/", usuarioController.list);
router.get("/create", alunoController.createForm);
router.post("/create", alunoController.create);
router.get("/:id/edit", alunoController.editForm);
router.post("/:id/edit", alunoController.update);
router.get("/:id/delete", alunoController.delete);

export default router;