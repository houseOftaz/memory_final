import { Router } from "express";
import {
  adminBanishUser,
  adminGetUsers,
} from "../controllers/admin.controller.js";

const auth_router = Router();

auth_router.get("/admin", adminGetUsers);

auth_router.delete("/user/:id", adminBanishUser);
// auth_router.get('/:id', getUser);

// route pour obtenir tous les utilisateur
//auth_router.get('/', getUsers);

export default auth_router;
