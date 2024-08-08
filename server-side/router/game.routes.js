import { Router } from "express";
import { getThemes } from "../controllers/theme.controller.js";

const router = Router();

router.get("/themes/:themeValue", getThemes);
// route pour créer une nouvelle partie
// router.post("/", createGame);

// route pour mettre à joure partie existant
// router.put("/:id", updateGame);

// route pour obternir une partie par ID
// router.get('/:id', getGame);

// route pour obtenir toutes les parties
// router.get('/', getUGame);

// route pour supprimer une partie
// router.delete('/:id', deleteGame);

export default router;
