import express from "express";
import {
    formPurchase,
    createPurchase,
    listPurchase,
    purchaseDetails,
    cancelPurchase,
    markDelivered,
    undoToProcessed
} from "../controllers/purchaseController.js";

const router = express.Router();

router.get("/", listPurchase);
router.get("/form", formPurchase);
router.get("/:id", purchaseDetails);
router.post("/", createPurchase);
router.post("/cancel/:id", cancelPurchase);
router.post("/deliver/:id", markDelivered);
router.post("/undo/:id", undoToProcessed);

export default router;