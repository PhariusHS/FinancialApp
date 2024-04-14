import { Router } from "express";
import {
  getSpents,
  getSpent,
  deleteSpent,
  updateSpent,
  createSpent,
} from "../controllers/spent.controller.js";
import { validateSchema } from "../middlewares/validateAuth.js";
import { spentSchema } from "../schemas/spent.schema.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/spents", authRequired, getSpents);
router.get("/spents/:id", authRequired, getSpent);
router.post("/spents", authRequired, validateSchema(spentSchema), createSpent);
router.delete("/spents/:id", authRequired, deleteSpent);
router.put("/spents/:id", authRequired, updateSpent);

export default router;
