import express from "express";
import {
  createTransaction,
  getAllTransaction,
} from "../controllers/transaction-controller";
import { roleGuard, verifyToken } from "../middlewares/auth-middleware";

const router = express.Router();

router
  .route("/")
  .get(verifyToken, roleGuard("READER"), getAllTransaction)
  .post(verifyToken, roleGuard("READER"), createTransaction);

export default router;
