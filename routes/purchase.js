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
router.post("/", createPurchase);
router.post("/cancel/:id", cancelPurchase);
router.post("/deliver/:id", markDelivered);
router.post("/undo/:id", undoToProcessed);
router.get("/:id", purchaseDetails);

export default router;