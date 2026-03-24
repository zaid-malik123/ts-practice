import express from "express";
import { register, login, logout, getMe } from "../controllers/user.controllers.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", isAuthenticated, getMe);
export default router;
//# sourceMappingURL=user.routes.js.map