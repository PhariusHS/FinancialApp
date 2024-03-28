import { Router } from "express";
import { getSpents, getSpent, deleteSpent, updateSpent, createSpent } from "../controllers/spent.controller.js";

const router = Router()

router.get("/spents", getSpents)
router.get("/spents/:id", getSpent)
router.post("/spents", createSpent)
router.delete("/spents/:id", deleteSpent)
router.put("/spents/:id", updateSpent)

export default router