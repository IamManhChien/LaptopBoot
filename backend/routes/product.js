import express from "express";
import productController from "../controllers/productController.js";
const router = express.Router();

router.get("/laptop",productController.getLaptop);
router.get("/camera",productController.getCamera);
router.get("/random",productController.getRandom);
router.get("/product",productController.getProduct);
router.get("/search",productController.search);
export default router;