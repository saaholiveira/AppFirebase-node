import { Router } from "express";
import professorController from "../controllers/professorController.js";

const router = Router();

// /professor/
router.get("/", professorController.list);

// /professor/create
router.get("/create", professorController.createForm);
router.post("/create", professorController.create);

// /professor/:id/edit
router.get("/:id/edit", professorController.editForm);
router.post("/:id/edit", professorController.update);

// /professor/:id/delete
router.get("/:id/delete", professorController.delete);

export default router;
