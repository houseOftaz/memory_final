import { Router } from "express";
import auth_router from "./auth.routes.js";

const router = Router();
const SERVER_SIDE_PATH = "/server-side";

router.use(`${SERVER_SIDE_PATH}/auth`, auth_router);

export default router;
