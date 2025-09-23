import { Router } from "express";
import cursoController from "../controllers/cursoController.js";

const router = Router();

router.get("/", cursoController.list);
router.get("/create", cursoController.createForm);
router.post("/create", cursoController.create);

export default router;