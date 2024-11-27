import { Router } from "express";
import { getThemes } from "../controllers/theme.controller.js";
import {
  createGame,
  createMsg,
  deleteMsg,
  getMsg,
} from "../controllers/game.controller.js";
import isAuthMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/themes/:themeValue", getThemes);

router.post("/games/", isAuthMiddleware, createGame);

router.post("/challenge-msg", isAuthMiddleware, createMsg);

router.get("/challenge-msg", isAuthMiddleware, getMsg);

router.delete("/challenge-msg/:msgId", isAuthMiddleware, deleteMsg);

export default router;
