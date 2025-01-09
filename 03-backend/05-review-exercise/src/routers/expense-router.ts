import express from "express";

import { getAllExpense } from "../controllers/expense-controller";

const router = express.Router();

router.route("/").get(getAllExpense);

export default router;
