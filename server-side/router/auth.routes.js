import { Router } from "express";
import {
  registerUser,
  loginUser,
  me,
  updateUser,
  deleteUser,
  logoutUser,
  getUsersWithGames,
} from "../controllers/user.controller.js";
import isAuthMiddleware from "../middlewares/auth.middleware.js";

const auth_router = Router();

auth_router.post("/register", isAuthMiddleware, registerUser);

auth_router.post("/login", isAuthMiddleware, loginUser);

auth_router.get("/logout", isAuthMiddleware, logoutUser);

auth_router.get("/me", isAuthMiddleware, me);

auth_router.patch("/update", isAuthMiddleware, updateUser);

auth_router.delete("/delete", isAuthMiddleware, deleteUser);

auth_router.get("/rank", isAuthMiddleware, getUsersWithGames);

// route pour obtenir tous les utilisateur
//auth_router.get('/', getUsers);

export default auth_router;
