import express from "express";
const router = express.Router();
import { createCard, getCards } from "../controllers/card.js";
import auth from "../middleware/auth.js";

router.post("/", auth, createCard);
router.get("/", getCards);

export default router;
