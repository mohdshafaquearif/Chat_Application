import express from "express";
const router = express.Router();
import { login, logout, signup } from "../controllers/auth.controller.js";

router.post("/signup", signup);  // ✅ Pass the function
router.post("/login", login);
router.post("/logout", logout);

export default router;
