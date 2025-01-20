import express from "express";
import {
  createCategory,
  getAllCategories,
} from "../controllers/category-controller";
import { roleGuard, verifyToken } from "../middlewares/auth-middleware";

const router = express.Router();

router
  .route("/")
  .get(verifyToken, roleGuard("ADMIN"), getAllCategories)
  .post(verifyToken, roleGuard("AUTHOR"), createCategory);

export default router;
