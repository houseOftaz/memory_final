import { Router } from "express";
import {
  adminBanishUser,
  adminGetUsers,
  adminUnbanishUser,
} from "../controllers/admin.controller.js";

const auth_router = Router();

auth_router.get("/admin", adminGetUsers);

auth_router.patch("/user/banish/:id", adminBanishUser);

auth_router.patch("/user/unbanish/:id", adminUnbanishUser);

export default auth_router;
