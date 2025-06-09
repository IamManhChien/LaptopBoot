import authController from "../controllers/authController.js";

import express from "express";
const router = express.Router();

router.post("/register",authController.registerUser);
router.post("/login",authController.loginUser);
router.post("/refresh",authController.requestRefreshToken);
router.get("/me",authController.getMe)
export default router;