import express from "express";
import {
    listProduct,
    productDetails
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", listProduct);
router.get("/:id", productDetails);

export default router;