import express from "express";
const router=express.Router();
import {login ,logout,signup} from"../controllers/auth.controller.js";
router.post("/signup");

router.post("/login");

router.post("/logout");

export default router;