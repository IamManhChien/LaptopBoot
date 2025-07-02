import express from "express";
import productController from "../controllers/productController.js";
const router = express.Router();

router.get("/laptop",productController.getLaptop);
router.get("/laptop/:brand",productController.getLaptopByBrand);
router.get("/camera",productController.getCamera);
router.get("/camera/:brand",productController.getCameraByBrand);
router.get("/random",productController.getRandom);
router.get("/product",productController.getProductDetail);
router.get("/search",productController.search);
export default router;