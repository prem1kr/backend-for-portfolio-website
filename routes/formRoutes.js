import express from "express";
import { AllData, FormData } from "../controllers/formController.js";

const router = express.Router();

router.post('/form', FormData);
router.get('/read', AllData);

export default router;

