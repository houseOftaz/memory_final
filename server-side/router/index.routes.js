import { Router } from "express";
import auth_router from "./auth.routes.js";
import admin_router from "./admin.routes.js";
import game_router from "./game.routes.js";
import { seedBackCards, seedDB } from "../controllers/seed.controller.js";

const router = Router();
const SERVER_SIDE_PATH = "/server-side";

router.use(`${SERVER_SIDE_PATH}/auth`, auth_router);
router.use(`${SERVER_SIDE_PATH}/admin`, admin_router);
if (process.env.NODE_ENV === "development") {
  router.get(`${SERVER_SIDE_PATH}/seed`, seedDB);
  router.get(`${SERVER_SIDE_PATH}/seed-back-cards`, seedBackCards);
}

router.use(`${SERVER_SIDE_PATH}/game`, game_router);

export default router;
