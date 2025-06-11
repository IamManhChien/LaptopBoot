import express from "express";
import cartController from "../controllers/cartController.js";
import middlewareController from "../controllers/middlewareController.js"
const router = express.Router();

router.get("/cart",middlewareController.verifiedToken,cartController.getCart);
router.post("/cart",cartController.addItem);
router.delete("/cart",cartController.removeItem);
router.get("/buynow",cartController.buyNow);
export default router;