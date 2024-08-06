import { Router } from "express";
import auth_router from "./auth.routes.js";
import admin_router from "./admin.routes.js";
import { seedDB } from "../controllers/seed.controller.js";

const router = Router();
const SERVER_SIDE_PATH = "/server-side";

router.use(`${SERVER_SIDE_PATH}/auth`, auth_router);
router.use(`${SERVER_SIDE_PATH}/admin`, admin_router);
router.get(`${SERVER_SIDE_PATH}/seed`, seedDB);

export default router;
