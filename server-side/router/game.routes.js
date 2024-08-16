import { Router } from "express";
import { getThemes } from "../controllers/theme.controller.js";
import {
  createGame,
  createMsg,
  deleteMsg,
  getMsg,
} from "../controllers/game.controller.js";

const router = Router();

router.get("/themes/:themeValue", getThemes);

router.post("/games/", createGame);

router.post("/challenge-msg", createMsg);

router.get("/challenge-msg", getMsg);

router.delete("/challenge-msg/:msgId", deleteMsg);

export default router;
