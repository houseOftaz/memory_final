import { Router } from "express";
import { getThemes } from "../controllers/theme.controller.js";
import { createGame } from "../controllers/game.controller.js";

const router = Router();

router.get("/themes/:themeValue", getThemes);

router.post("/games/", createGame);

// route pour obternir une partie par ID
// router.get('/:id', getGame);

// route pour obtenir toutes les parties
// router.get('/', getUGame);

// route pour supprimer une partie
// router.delete('/:id', deleteGame);

export default router;
