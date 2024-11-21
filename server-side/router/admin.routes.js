import { Router } from "express";
import {
  adminBanishUser,
  adminGetUsers,
  adminUnbanishUser,
} from "../controllers/admin.controller.js";
import isAdminMiddleware from "../middlewares/admin.middleware.js";

const auth_router = Router();

auth_router.get("/admin", isAdminMiddleware, adminGetUsers);

auth_router.patch("/user/banish/:id", isAdminMiddleware, adminBanishUser);

auth_router.patch("/user/unbanish/:id", isAdminMiddleware, adminUnbanishUser);

export default auth_router;
