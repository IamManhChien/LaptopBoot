import express from "express";
import cartController from "../controllers/cartController.js";
import middlewareController from "../controllers/middlewareController.js"
const router = express.Router();

router.get("/cart",middlewareController.verifiedToken,cartController.getCart);
router.post("/cart",middlewareController.verifiedToken,cartController.addItem);
router.delete("/cart",middlewareController.verifiedToken,cartController.removeItem);
router.get("/buynow",middlewareController.verifiedToken,cartController.buyNow);
export default router;